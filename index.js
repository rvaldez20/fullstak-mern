import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';


import conectarDB from './config/db.js';
import veterinarioRoutes from './routes/veterinarioRoutes.js';



const app = express();

conectarDB();

app.use('/api/veterinarios', veterinarioRoutes); // all routes veterinarios

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`)
})