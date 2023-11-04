import express from 'express';
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js'
import './config.js'

const app = express();
const PORT = process.env.port || 8080;

// Middlewares
app.use(express.json())

// Routes
app.use('/', indexRoutes)
app.use('/api', employeesRoutes)
app.use((req, res, next)=>{
    res.sendStatus(404).json({
        message: "Page not found"
    })
})

// Server
app.listen(PORT, () => {
    console.log(`Server listenning on port ${PORT}...`);
})
