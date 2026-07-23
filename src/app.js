require("dotenv").config();

const express = require('express');
const connectDB =  require('./config/database'); // Import the database connection
const app = express();
const User = require('./models/user'); // Import the User model

app.use(express.json()); // Middleware to parse JSON request bodies

app.post('/signup', async (req,res) => {
    const user = new User(req.body);
    
try {
    await user.save()
    res.send("User created successfully");
} catch (error) {
    res.send("Error creating user: " + error.message);
}
});

// Feed api - /feed - get all user from database
app.get('/feed', async (req,res) => {
    try{
        const users = await User.find({});
        res.send(users);
    }
    catch (error) {
        res.status(400).send("something went wrong");
    }
})

connectDB() // Connect to the database
    .then(() => {
        console.log("Database connected successfully");
        app.listen(3000, () => {
            console.log("server is started on port 3000");
    });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
