import { connect } from "mongoose";

async function db(){

    try {
        await connect("mongodb://127.0.0.1:27017/todoDB");
        console.log("database connected succesfully");
        
        
    } catch (error) {
        console.log(error);
        
    }
}

export default db