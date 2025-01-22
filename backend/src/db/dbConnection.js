import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connect");
}).catch(() => {
    console.log("Not Connect");
})