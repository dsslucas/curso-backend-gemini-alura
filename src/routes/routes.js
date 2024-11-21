import express from "express";
import postsController from "../controllers/postsController.js";
import bookController from "../controllers/bookController.js";
import usersController from "../controllers/usersController.js";

const routes = async (app) => {
    app.use(express.json());
    const { findAllPosts, findPostById, findByDescription } = postsController();
    const { getBook } = bookController();
    const { registerUser } = usersController();

    // Route
    app.get("/posts", findAllPosts);
    app.get("/post/:id", findPostById);

    // Exercise Lesson 1
    app.get("/livro", getBook);

    // Exercise Lesson 2
    app.get("/posts/descricao/:descricao", findByDescription);

    // Exercise Lesson 3
    app.post("/user/register", registerUser)
}

export default routes;