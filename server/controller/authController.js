const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/userModel')
const mongoose = require('mongoose')
require("dotenv").config()

exports.registerUser = async (req,res)=>{
    const {username, email, password } = req.body
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }
     const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists." });
    }
     const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password:hashedPassword  })
    await newUser.save()
    res.status(201).json({ message: 'User registered successfully!' })
}

exports.loginUser = async (req,res) => {
    const {username, password } = req.body
    const user = await User.findOne({ username: username })

    if (!user) {
        return res.status(401).json({ message: "Invalid username." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password." });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
}