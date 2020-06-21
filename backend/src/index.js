import express from'express'
import mongoose from'mongoose'
import cors from'cors'
import socketio from'socket.io'
import http from'http'

import routes from'./routes'


const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    connectedUsers[user] = socket.id;
})

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-ub5tj.gcp.mongodb.net/tindev?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use((req, res, next)=>{
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
})

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);