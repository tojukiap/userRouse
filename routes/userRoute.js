const express = require('express')
const router = express.Router();
const User = require("../models/userModel")

router.post('/signup', async (req, res) => {
    res.send('Hello World!')

    let { firstName, lastName, email, password } = req.body;

    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
        return res.json({
            status: "failed",
            message: "Email already exist",
        });
    }

const newUser = { FirstName, lastName, email, password };
const createUser = await newUser.create(newUser);

res.status(201).json({
    status: "successful",
    data: {
        id: createUser._id,
        firstName: createUser.firstName,
        lastName: createUser.lastName,
        email: createUser.email,
        },
    })
    console.log(req.body)
})

module.exports = router