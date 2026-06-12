"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({
            message: "Invalid input"
        });
        return;
    }
    try {
        await db_1.UserModel.create({
            username, password
        });
        res.status(201).json({
            message: "User signup successfully"
        });
    }
    catch (e) {
        res.status(401).json({
            message: "User already exists"
        });
    }
});
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await db_1.UserModel.findOne({
        username, password
    });
    if (existingUser) {
        res.status(200).json({
            messasge: "Login successful"
        });
    }
    else {
        res.status(401).json({
            message: "Invalid username or password"
        });
    }
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
