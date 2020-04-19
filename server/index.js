const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');
const path = require('path');
const helmet = require('helmet');


const db = require('./db');
const {ErrorModel} = require('./models');
// const {UserCtrl} = require('./controllers');
// const validateToken = require('./middleware/validate-token');
const app = express();

// ROUTE
const {
  apiErrorRouterProtected,
  apiPetRouterProtected,
  apiPersonRouterProtected,
  apiUserRouterProtected,
  apiVaccineRouterProtected,
  apiVetRouterProtected,
  viewVetRouterProtected,

  apiUserRouterUnprotected,
  viewUserRouterUnprotected,
  viewVetRouterUnprotected,
} = require('./route');


app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(helmet());

// VIEWS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerHelper('trueToSim', require('./views/helpers/trueToSim'));
hbs.registerHelper('dateFormatter', require('./views/helpers/dateFormatter'));


// DB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Protected
app.use('/', apiUserRouterProtected);
app.use('/', apiPetRouterProtected);
app.use('/', apiPersonRouterProtected);
app.use('/', apiVaccineRouterProtected);
app.use('/', apiVetRouterProtected);
app.use('/', apiErrorRouterProtected);
app.use('/', viewVetRouterProtected);

// Unprotected
app.use('/', apiUserRouterUnprotected);
app.use('/', viewVetRouterUnprotected);
app.use('/', viewUserRouterUnprotected);


// Error Handler
app.use(async (error, req, res, next) => {
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};
  res.status(500);
  const err = error;
  err.error = JSON.stringify(err.errors);
  await ErrorModel.create(err);

  res.render('error');
});

app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT'), () =>
  console.log(`Server running on port ${app.get('PORT')}`),
);


module.exports = app;
