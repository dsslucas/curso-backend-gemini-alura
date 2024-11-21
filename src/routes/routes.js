import express from "express";
import postsController from "../controllers/postsController.js";
import bookController from "../controllers/bookController.js";

const routes = async (app) => {
    app.use(express.json());
    const {findAllPosts, findPostById, findByDescription} = postsController();
    const {getBook} = bookController();

    // Route
    app.get("/posts", findAllPosts);
    app.get("/post/:id", findPostById);

    // Exercise
    app.get("/livro", getBook);

    // Exercise
    app.get("/posts/descricao/:descricao", findByDescription);
}

export default routes;