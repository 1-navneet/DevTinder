const mongoose = require('mongoose'); 

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://navneettech06_db_user:lpN8cnexGizHccRX@namastenodejs.ilbdw0v.mongodb.net/DevTinder"
    );
};

module.exports = connectDB;
