import express from 'express';
import dotenv from 'dotenv';
import { contactsRouter } from './Backend/src/routers/contacts.router.js.js';

const app = express();
dotenv.config();

/*---------------MIDDLEWARES---------------*/

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('../public')); 

/*---------------ROUTERS---------------*/

app.use('/api/contacts', contactsRouter); //GET para obtener contactos y POST para guardarlos.

/*---------------SERVER---------------*/

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`)
});

server.on('error', (error)=>{
    console.log(error)
});