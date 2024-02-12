const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 5000;

async function startServer() {
    await connectDb();

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

// creating a db connection
const connectDb = async () => {
    await mongoose.connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB Server is up and running");
};

const mongooseDisconnect = async () => {
    await mongoose.disconnect();
    console.log("MongoDB connection is disconnected");
};

startServer();

module.exports = {
    connectDb,
    mongooseDisconnect,
};
