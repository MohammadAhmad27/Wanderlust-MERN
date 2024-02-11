const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


//Connecting to Database
main().then(() => {
    console.log("Connected to MongoDB!");
})
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}


const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "65c1fad012c0391c42b3f111" }));
    await Listing.insertMany(initData.data);
    console.log("Data is initialized");
};

initDB();