import express from "express"
import data from "./data.js";

import connectingDatabase from "./src/config/database.js";
const connectDatabase = await connectingDatabase(process.env.KEY_MONGODB);

const app = express();
app.use(express.json());
const port = 3003;

app.listen(port, () => {
    console.log(`Server running at port ${port}.`);
});

async function getAllPosts(){
    const db = connectDatabase.db("imersao-instabytes");
    const collection = db.collection("posts");

    return collection.find().toArray();
}

// Route
app.get("/posts", async (req, res) => {
    const data = await getAllPosts();
    res.status(200).json(data);
});

app.get("/post/:id", (req, res) => {
    const { id } = req.params;

    function findPostById(id) {
        return data.posts.findIndex((post) => {
            return post.id === Number(id);
        })
    }

    const index = findPostById(id);

    if(typeof data.posts[index] === 'undefined') {
        res.status(400).send("Dado não encontrado.");
    }
    else {
        res.status(200).json(data.posts[index]);
    }
})

// Exercise
app.get("/livro", (req, res) => {
    res.status(200).send({
        "titulo": "O Senhor dos Anéis",
        "autor": "J.R.R. Tolkien",
        "ano": 1954,
        "genero": "Fantasia"
    });
});

// Exercise
app.get("/posts/descricao/:descricao", (req, res) => {
    const {descricao} = req.params;
    console.log(descricao)

    const result = data.posts.filter((element) => element.descricao.toUpperCase().includes(descricao.toUpperCase()));

    if(result.length > 0){
        res.status(200).json(result);
    }
    else {
        res.status(400).send("Dado não encontrado.");
    }
});

