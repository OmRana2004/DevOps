import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import express from "express";
const app = express();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prismaClient = new PrismaClient({
    adapter,
});
app.get("/", async (req, res) => {
    const data = await prismaClient.user.findMany();
    res.json({
        data
    });
});
app.post("/", async (req, res) => {
    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    res.json({
        message: "user created"
    });
});
app.listen(3000, () => {
    console.log("app is running on PORT- 3000");
});
//# sourceMappingURL=index.js.map