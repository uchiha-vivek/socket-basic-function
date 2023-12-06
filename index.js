const express= require('express')



const http= require('http')
const path= require('path')
const {Server} = require("socket.io")
 

const app = express();

const PORT = 8000;

const server= http.createServer(app)


const io = new Server(server)


//socket io



io.on('connection', (socket)=> {

    // console.log("a new user has connected", socket.id)
     socket.on('user-message', (message) =>{
        // console.log("A new User message", message)
        io.emit("message",message);
     })
});





app.use(express.static(path.resolve('./public')))

app.get('/',(req,res)=>{
    return res.sendFile('./public/index.html')
})
server.listen(8000, () => console.log(`Server started at PORT ${PORT}`))

