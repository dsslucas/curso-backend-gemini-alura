import express from "express";
import postsController from "../controllers/postsController.js";
import bookController from "../controllers/bookController.js";
import usersController from "../controllers/usersController.js";
import multer from "multer";

// Not rename random characters
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

// Windows
const upload = multer({ dest: "./uploads" , storage});
// Linux or Mac
// const upload = multer({dest: "./uploads"});

const routes = async (app) => {
    app.use(express.json());
    const { registerNewPost, uploadImage, findAllPosts, findPostById, findByDescription } = postsController();
    const { getBook } = bookController();
    const { registerUser } = usersController();

    // Route
    app.get("/posts", findAllPosts);
    app.post("/post", registerNewPost);
    app.post("/upload", upload.single("image"), uploadImage);
    app.get("/post/:id", findPostById);
    

    // Exercise Lesson 1
    app.get("/livro", getBook);

    // Exercise Lesson 2
    app.get("/posts/descricao/:descricao", findByDescription);

    // Exercise Lesson 3
    app.post("/user/register", registerUser)
}

export default routes;