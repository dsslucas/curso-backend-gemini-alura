import postsModels from "../models/postsModels.js";

const postsController = () => {
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
        findAllPosts, findPostById, findByDescription
    }
}

export default postsController;