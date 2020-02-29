const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const hbs = require('hbs')
const path = require('path')

const app = express()

const db = require('./db')
const config = require('./config')

const { adminRouterProtected, 
        adminRouterUnprotected } = require('./route')

const validateToken = require('./middleware/validate-token')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(
    cors({
        allowedHeaders: ['sessionId', 'Content-Type', 'master-token'],
        exposedHeaders: ['sessionId'],
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
    }),
)



app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'))
app.set('view engine', 'hbs');


//Data Base infra
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/api', adminRouterUnprotected)

app.use('/api', validateToken, adminRouterProtected)


app.set('PORT', process.env.PORT || 3000)
app.listen(app.get('PORT'), () =>
    console.log(`Server running on port ${app.get('PORT')}`),
)
