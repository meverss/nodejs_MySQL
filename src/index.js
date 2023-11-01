import express from 'express';
import indexRoutes from './routes/index.routes.js';
import employeesRoutes from './routes/employees.routes.js';

const app = express();
const PORT = process.env.port || 8080;

// Handle JSON requests
app.use(express.json())

// Routes
app.use('/', indexRoutes)
app.use('/api', employeesRoutes)

// Server
app.listen(PORT, () => {
    console.log(`Server listenning on port ${PORT}...`);
})
