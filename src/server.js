const express = require("express")
const {createConnection} = require("mysql2/promise")
// const db = createConnection({
//     host:"localhost",
//     user:"root",
//     password:"mysql123$",
//     database:"mhmd_db",
//     rowsAsArray: false,

// });


const app = express();
const PORT = process.env.PORT || 4000;

const connectedUser = new Set();


app.get("/",async (req,res)=>{
//     const [rows,fields] = await (await db).execute("SELECT * from user");
//     console.log(rows)
//     u= rows[0].username;
//     e= rows[0].email;
//     p= rows[0].password;

    res.send(`email:, username:, password:`)

})


const server = app.listen(PORT,(req,res)=>{
    
    console.log('Server Started on', PORT)
});

const io = require( 'socket.io')(server)

io.on('connection',(socket)=>{
    console.log("connected Succesfully", socket.id)
    connectedUser.add(socket.id)
    io.emit('connected-user',connectedUser.size)
    
    socket.on("disconnect",()=>{
        console.log("disconnected user:", socket.id)
        connectedUser.delete(socket.id)
        io.emit('connected-user',connectedUser.size)
    });

    socket.on('message',(data)=>{
        console.log(data);
        socket.broadcast.emit('message-receive', data);
  
    })
})
