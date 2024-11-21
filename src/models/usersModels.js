import { ObjectId } from "mongodb";
import connectingDatabase from "../config/database.js";

const connectDatabase = await connectingDatabase(process.env.KEY_MONGODB);

const usersModels = () => {
    const registerUser = async (data) => {        
        const db = connectDatabase.db("imersao-instabytes");
        const collection = db.collection("users");    
        return collection.insertOne(data);
    }

    return {
        registerUser
    }
}

export default usersModels;

