import { Connection } from "../entities/Connection";
import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { UsersService } from "../services/UsersServices";
import { MessagesService } from "../services/MessagesService";

interface IParams {
  text: string;
  email: string;
}

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;
    /**
     * FOrçar o "params" receber os mesmos dados da interface ajuda a detectar
     * um erro caso haja parâmetros não requisitados além do 'text e 'email'
     */
    const { text, email } = params as IParams;
    let user_id = null;

    const userExists = await usersService.findByEmail(email);

    if (!userExists) {
      const user = await usersService.create(email);

      await connectionsService.create({
        socket_id,
        user_id: user.id,
      });

      user_id = user.id;
    } else {
      // Se o usuário ja existe...
      // verifica se já existe uma conexão para este usuario
      const connection = await connectionsService.findByUserId(userExists.id);

      // se não existe, ele cria uma conexão
      if (!connection) {
        await connectionsService.create({
          socket_id,
          user_id: userExists.id,
        });
      } else {
        //se ja existe a conexão, ele atualiza o ID do socket
        connection.socket_id = socket_id;

        await connectionsService.create(connection);
      }

      user_id = userExists.id;
    }

    await messagesService.create({
      text,
      user_id,
    });
  });
});
