import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hi there");
})

app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
 
   // existing user checking
    const existingUser = await prismaClient.user.findUnique({
        where: { username }
    });
    if (existingUser) {
        return res.status(401).json({
            messasge: "User not found !"
        })
    }

     //create user
     const user = await prismaClient.user.create({
        data: {
            username,
            password
        }
     });

     return res.status(201).json({
        message: "User created successfully",
        user
     })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
      message: "Internal server error"
    });
    }
});

app.listen(3001, () => {
    console.log("server is lisining on port 3001");
})