const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABSE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("DB connection successful"))
        .catch((error) => {
            console.log("Error Recieved in db connection");
            console.error(error.message);
            process.exit(1);
        });
}

module.exports = dbConnect;