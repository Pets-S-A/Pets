const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const hbs = require('hbs');
const path = require('path');
const helmet = require('helmet');


const db = require('./db');
const {ErrorModel} = require('./models');
const {UserCtrl} = require('./controllers');
// const validateToken = require('./middleware/validate-token');
const app = express();

// ROUTE
const {
  apiPetRouterProtected,
  apiPersonRouterProtected,
  apiVaccineRouterProtected,
  userRouterUnprotected,
  userRouterProtected,
  vetRouterUnprotected,
} = require('./route');


app.use(
    cors({
      allowedHeaders: ['sessionId', 'Content-Type', 'master-token'],
      exposedHeaders: ['sessionId'],
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
    }),
);
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(helmet());

// VIEWS
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');


// DB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Unprotected
app.use('/', userRouterUnprotected);
app.use('/', vetRouterUnprotected);
app.get('/', UserCtrl.get);

// Protected
app.use('/', userRouterProtected);
app.use('/api', apiPetRouterProtected);
app.use('/api', apiPersonRouterProtected);
app.use('/api', apiVaccineRouterProtected);
// app.use('/admin', errorRouterUnprotected);

// Error Handler
app.use(async (error, req, res, next) => {
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};
  res.status(error.status || 500);

  const err = error;
  err.error = JSON.stringify(err.errors);
  await ErrorModel.create(err);

  res.render('error');
});

app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT'), () =>
  console.log(`Server running on port ${app.get('PORT')}`),
);


module.exports = app