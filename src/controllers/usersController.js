import postsModels from "../models/postsModels.js";
import usersModels from "../models/usersModels.js";

const usersController = () => {
    const registerUser = async (req, res) => {
        const {name, email, password} = req.body;

        var data = {
            name,
            email,
            password,
            dateRegister: new Date()
        };

        const response = await usersModels().registerUser(data);

        if (response == null) res.status(400).send("User not registed!");
        else res.status(200).json("User register!");
    }

    return {
        registerUser
    }
}

export default usersController;