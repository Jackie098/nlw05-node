import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

/**
 * Criando o servidor HTTP que chama o EXPRESS através do 'app', ou seja,
 * no servidor HTTP, vai embutido o EXPRESS
 */
const http = createServer(app);
const io = new Server(http); // Criando o protocolo WS ( Web Socket)
// Embutindo o servidor WS no servidor HTTP

// Ao se conectar no servidor, o WS executa um comando de mensagem
io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});

app.use(express.json());
app.use(routes);

export { http, io };
