import app from './app.js'
import { PORT } from './config.js'

// Server
app.listen(PORT, () => {
    console.log(`Server listenning on port ${PORT}...`);
})
