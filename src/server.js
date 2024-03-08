
import express from 'express'; 
import 'dotenv/config';
import { dbConnection } from './database/db.js';

import router from './routes/router.js'; 

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 4001;


app.get('/api/healthy', (req , res) =>{
    res.status(200).json(
        {
            success: true,
            message: "server is healthy"
        }
    )
});

app.use('/api', router);


dbConnection()
.then(()=>{
    console.log('Database connected');
    // run the server on port
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`)
    })
})
.catch(error => {
    console.log (error)
});



