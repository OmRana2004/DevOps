import mongoose, {model, Schema } from "mongoose";

const mongoUrl: string = "mongodb://mongocontainer:27017/docker"

// Connect to mongo
mongoose.connect(mongoUrl)
    .then(() => console.log("MongoDb is Connected Successfully!"))
    .catch(err => console.log("MongoDb connection error", err));

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);
