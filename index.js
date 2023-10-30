const express = require('express')
const app = express()
const router = require('./routes/route')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')
const swaggerDef = require('./helper/swagger_template.helper')

require('dotenv').config()

const port = process.env.PORT || 3000

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Testing FGA Issue',
            version: '1.0.0',
            description: 'Your API description',
        },
        servers: [
            {
                url: 'http://localhost:8080',
            },
            {
                url: 'http://localhost:3000',
            },

        ],
    },
    apis: ['./routes/user.route.js'],
}
const swaggerSpec = swaggerJsdoc(swaggerOptions)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
