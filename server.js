const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    try {
        mongoose.connect(process.env.DATABASE_ACCESS);
        app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
    } catch (err) {
        console.error("Connection to MongoDB failed", err.message);
    }
};

connectDB();

mongoose.connection.on("open", () =>
    console.log("Connection to database has been established successfully")
);

mongoose.connection.on("error", (err) => console.log(err));
