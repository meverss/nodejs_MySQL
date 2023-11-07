import express from 'express'
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js'
import fs from 'fs'

// Static content
const errorPage = fs.createReadStream('./src/static/404error.html')

// Application
const app = express();

// Middlewares
app.use(express.json())

// Routes
app.use('/', indexRoutes)
app.use('/api', employeesRoutes)
app.use((req, res) => {
    // errorPage.pipe(res)
    res.status(404).json({
        message: "Page not found"
    })
})

export default app;