import postsModels from "../models/postsModels.js";

const bookController = () => {
    const getBook = async (req, res) => {
        res.status(200).send({
            "titulo": "O Senhor dos Anéis",
            "autor": "J.R.R. Tolkien",
            "ano": 1954,
            "genero": "Fantasia"
        });
    }

    return {
        getBook
    }
}

export default bookController;