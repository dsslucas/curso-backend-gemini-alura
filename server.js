import express from "express"
import data from "./data.js";
import routes from "./src/routes/routes.js";

const app = express();
routes(app);

const port = 3003;

app.listen(port, () => {
    console.log(`Server running at port ${port}.`);
});