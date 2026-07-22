require("dotenv").config();

const express = require('express');
const connectDB =  require('./config/database'); // Import the database connection
const app = express();

const User = require('./models/user'); // Import the User model
app.post('/signup', async (req,res) => {
    try {
        const user = new User({
        firstName: "Navneet",
        lastName: "Yadav",
        emailId: "navneet@example.com",
        password: "123***"
    });
    await user.save()

    res.send("User created successfully");
} catch (error) {
    res.send("Error creating user: " + error.message);
}
});

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
