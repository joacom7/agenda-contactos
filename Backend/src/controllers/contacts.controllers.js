import { knex } from '../database/config.js';
import { v4 as uuidv4 } from 'uuid';

export const getContacts = async (req, res) =>{
    try{
        const contacts = await knex.select().from("contacts");
        res.status(200).json({contacts});
    } 
    catch(error){
        res.status(500).json({msg: "An error has ocurred. Please try again."});
    }
};

export const saveContact = async (req, res) =>{
    
    const {name, phone, email} = req.body;
    
    const newContact = {
        id: uuidv4(),
        name, 
        phone,
        email
    };

    try{
        const response = await knex.insert(newContact).from("contacts");
        res.status(200).json({msg: `Contact ${name} was saved.`});
    }
    catch(error){
        res.status(500).json({msg: `An error has ocurred. Please try again. Error Data: ${error.message}.`});
    }

};