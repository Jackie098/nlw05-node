 ## Customer attendance service
 
Back-end system where an online service was created. With bidirectional connection (WebSocket) and HTTP protocol to save and edit client information. System created during the Rocketseat event known as NLW or New Level Week.


## Technologes
 
Technologies used in the project.
 
* Node version 14.16.1
* Typescript version 4.2.4
* Socket.io version 4.0.1
* Ejs version 3.1.6
* SqLite3 version 5.0.2
 
## Used Services
 
* Git

## Starting

  **1º** Clone the project and install the dependencies (with YARN):
  > yarn 

  **2º** After installing all dependencies, start the server:
  > yarn dev

  **3º** In the browser, refer to *localhost/3333/pages/client* for the client view and *localhost/pages/admin* for the administrator view.

## How to use
 
  **1º** When the customer clicks the *support* button. The following will appear:  
  ![Template inicial - cliente](https://github.com/Jackie098/nlw05-node/blob/main/images-readme/client_1.png)

  **2º** When inserting the message and your e-mail (identification), the system will initiate a connection via socket and wait for an administrator to respond.  
  ![Esperando atendimento](https://github.com/Jackie098/nlw05-node/blob/main/images-readme/client_02.png)

  **3º** On the administrator page, a list of all users waiting to be serviced will be displayed.  
  ![Lista de clientes em espera](https://github.com/Jackie098/nlw05-node/blob/main/images-readme/admin_01.png)

  **4º** Clicking on a button will open a chat and the button will disappear.  
  ![Chat com cliente](https://github.com/Jackie098/nlw05-node/blob/main/images-readme/admin_02.png)

 
## Updates
 
  - Suggestions: 
    - In chat, function to delete message sending and/or edit it.
 
 
## Links
 
  - Repository: https://github.com/Jackie098/nlw05-node
    - In case of doubts or suggestions, feel free to contact and/or request **pull requests**.
 
 
## Creators
 
* **Rocketseat**: (https://github.com/Rocketseat)
