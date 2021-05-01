 ## Serviço de atendimento ao cliente
 
Sistema back-end onde foi criado um atendimento online. Conexão bidirecional (WebSocket) e protocolo HTTP para salvar e editar as informações do cliente. Sistema criado durante o evento da Rocketseat conhecido como NLW ou New Level Week.


## Tecnologias 
 
Tecnologias utilizadas no projeto.
 
* Node version 14.16.1
* Typescript version 4.2.4
* Socket.io version 4.0.1
* Ejs version 3.1.6
* SqLite3 version 5.0.2
 
## Serviços Usados
 
* Git

## Começando

  1º Clone o projeto e instale as dependências (com YARN):
  > yarn 

  2º Após instalado todas as dependências, inicie o servidor:
  > yarn dev

  3º No navegador, consulte o *localhost/3333/pages/client* para acessar a visão do cliente e *localhost/pages/admin* para a visão do administrador

## Como usar
 
  1º Quando o cliente clicar o botão de *suporte*. Aparecerá o seguinte:
  ![Template inicial - cliente](https://github.com/Jackie098/nlw05-node/blob/main/images-readme/client_1.png)

  2º Ao inserir a mensagem e o seu e-mail (identificação), o sistema iniciará uma conexão via socket e aguardará um administrador responder.
  ![Esperando atendimento](https://github.com/Jackie098/nlw05-node/blob/main/images-readme/client_02.png)

  3º Na página do administrador, será exibido uma lista com todos usuários em aguardo de atendimento
  ![Lista de clientes em espera](https://github.com/Jackie098/nlw05-node/blob/main/images-readme/admin_01.png)

  4º Ao clicar sobre um botão, abrirá um chat e o botão sumirá.
  ![Chat com cliente](https://github.com/Jackie098/nlw05-node/blob/main/images-readme/admin_02.png)

 
## Atualizações
 
  - Sugestões: 
    - No chat, função para apagar envio de mensagem e/ou poder editá-la.
 
 
## Links
 
  - Repositório: https://github.com/Jackie098/nlw05-node
    - Em caso de dúvidas ou sugestões, sinta-se livre para entrar em contato e/ou solicitar **pull requests**.
 
 
## Autor
 
* **Carlos Augusto M**: @Jackie098 (https://github.com/Jackie098)