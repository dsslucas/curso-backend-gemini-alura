import express from "express"

const app = express();
const port = 3003;

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
});

// Route
app.get("/api", (req, res) => {
    res.status(200).send("A Torre Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris.");
});