const api = "mongodb+srv://ogulcanakpinarrr:O.h3673m33c7.O@shopapp.gghwfs9.mongodb.net/";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

const User = require("./models/user");
const Order = require("./models/order");

//function to send verification email to the user
const sendVerificationEmail = async (email, verificationToken) => {

    //create a nodemailer transport
    const transporter = nodemailer.createTransport({
        //configure the email service
        service: "gmail",
        auth: {
            user: "ogulcan.akpinarrr@gmail.com",
            pass: "kxof tlpl evtk ulkl"
        }
    })

    //compose the email message
    const mailOptions = {
        from: "www.youtube.com",
        to: email,
        subject: "Email Verification",
        text: `Please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`
    }

    //send the email
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("Error sending verification email", error);
    }
}

mongoose.connect(api, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MONGODB")
}).catch((error) => {
    console.log("Error connecting to MongoDB", error);
})

app.listen(port, () => {
    console.log("Server is running on port", port);
});

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("Email already registered:", email);
            return res.status(400).json({
                message: 'Email Already registered!',
            })
        };

        //create a new User
        const newUser = new User({ name, email, password });

        //generate and store the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        //save the user to the database
        await newUser.save();

        //send verification email to the user
        sendVerificationEmail(newUser.email, newUser.verificationToken)

        res.status(201).json({ message: "Registration Successfull. Please check your email for verification" })
    } catch (error) {
        console.log("Error Register User ", error);
        res.status(500).json({ message: "Registration Failed" });
    }
})

//endpoint to verify
app.get("/verify/:token", async (req, res) => {
    try {
        const token = req.params.token;

        //Find the user with the given verification token
        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return res.status(404).json({ message: "Invalid verification token" })
        }

        //Mark the user as verified
        user.verified = true;
        user.verificationToken = undefined;

        await user.save();

        res.status(200).json({ message: "Email Verified Successfully" });

    } catch (error) {
        res.status(500).json({ message: "Email Verification Failed" });
    }
})

const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");
    return secretKey;
}

const secretKey = generateSecretKey();

//endpoint to login the user
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if the user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid email or password" })

        //check if the password is correct
        if (user.password !== password) return res.status(401).json({ message: "Invalid Password" })

        //generate a token
        const token = jwt.sign({ userId: user._id }, secretKey);

        res.status(200).json({ token })

    } catch (error) {
        res.status(500).json({ message: "Login Failed!" })
    }
})