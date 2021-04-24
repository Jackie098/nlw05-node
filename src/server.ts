import { http } from "./http";
import "./websocket/client";

// Ao iniciar o servidor HTTP, o servidor WS é iniciado também
http.listen(3333, () => console.log("Server is running on port 3333"));
