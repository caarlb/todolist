# todolist
SPA to handle your personal tasks 

Run with command:
npm start

DB information required set up on .env file:
PORT = 5000
CONNECTION_URL = mongodb+srv://testing:testing123@cluster0.n6gdj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

Required packages: {
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "mongoose": "^6.2.2",
    "nodemon": "^2.0.15"
  }
}