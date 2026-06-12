import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client";


const server = new WebSocketServer({
    port: 3002
});

server.on("connection", async (socket) => {
    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        }
    });

    socket.send("Hi there you are connected to the server");
});