import postsModels from "../models/postsModels.js";
import fs from "fs";

const postsController = () => {
    const registerNewPost = async (req, res) => {
        try {
            const response = await postsModels().post(req.body)

            if (response == null) res.status(400).json({message: "Post not registed!"});
            else res.status(200).json(response);
        }
        catch(error){
            res.status(500).json({mensagem: "Post not send by server issues."});
        }
    }

    const uploadImage = async (req, res) => {
        const newPost = {
            descricao: "",
            imgUrl: req.file.originalname,
            alt: ""
        };

        try {
            const response = await postsModels().post(newPost);
            const updatedImage = `uploads/${response.insertedId}.png`;
            
            // Database talks with local storage, ordering rename them.
            fs.renameSync(req.file.path, updatedImage);

            if (response == null) res.status(400).json({message: "Post not registed!"});
            else res.status(200).json(response);
        }
        catch(error){
            res.status(500).json({mensagem: "Post not send by server issues."});
        }
    }

    const findAllPosts = async (req, res) => {
        const data = await postsModels().getAllPosts();
        res.status(200).json(data);
    }

    const findPostById = async (req, res) => {
        const { id } = req.params;

        const data = await postsModels().getPostById(id);

        if (data == null) res.status(400).send("Post não encontrado.");
        else res.status(200).json(data);
    };

    const findByDescription = async (req, res) => {
        const { descricao } = req.params;

        const data = await postsModels().getPostByDescription(descricao);

        if (data == null) res.status(400).send("Post não encontrado.");
        else res.status(200).json(data);
    }

    return {
        registerNewPost, uploadImage, findAllPosts, findPostById, findByDescription
    }
}

export default postsController;