import { ObjectId } from "mongodb";
import connectingDatabase from "../config/database.js";

const connectDatabase = await connectingDatabase(process.env.KEY_MONGODB);

const postsModels = () => {
    const getAllPosts = async () => {        
        const db = connectDatabase.db("imersao-instabytes");
        const collection = db.collection("posts");    
        return collection.find().toArray();
    }

    const getPostById = async (id) => {
        const db = connectDatabase.db("imersao-instabytes");
        const collection = db.collection("posts");
        return collection.findOne({ _id: id }, { projection: { title: 1, content: 1 } });
    }

    const getPostByDescription = async (description) => {
        const db = connectDatabase.db("imersao-instabytes");
        const collection = db.collection("posts");
        await collection.find({ descricao: description }).toArray();
    }

    return {
        getAllPosts, getPostById, getPostByDescription
    }
}

export default postsModels;

