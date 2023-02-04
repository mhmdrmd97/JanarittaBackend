const express = require("express")
// const {createConnection} = require("mysql2/promise")
// const db = createConnection({
//     host:"localhost",
//     user:"root",
//     password:"mysql123$",
//     database:"mhmd_db",
//     rowsAsArray: false,

// });
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000;

const connectedUser = new Set();

let mydb ={
    "PromoCode": "\"hh\"",
    "products": [
        {
            "img": "https://jodar-artistry.com/wp-content/uploads/2021/01/Janaritta-Armooti-10.jpg",
            "likes": 0,
            "nameAr": "تجربة ثلاثة",
            "nameEn": "third Image",
            "place": "Jordan",
            "price": 42,
            "top": "0",
            "left": "0",
            "scaleX": "0",
            "scaleY": "0",
            "angle": "0"
          }
    ]
  }

app.post("/add",async (req,res)=>{

   mydb =  {"PromoCode": mydb.PromoCode,
   "products": [
    ...mydb.products,
     {
       "img": req.body.img,
       "likes": req.body.likes,
       "nameAr": req.body.nameAr,
       "nameEn": req.body.nameEn,
       "place": req.body.place,
       "price": req.body.price,
       "top":req.body.top,
       "left":req.body.left,
       "scaleX":req.body.scaleX,
       "scaleY":req.body.scaleY,
       "angle":req.body.angle
     },
    
    ]
}

    res.json(mydb.products)

})
app.get("/",async (req,res)=>{
    // const [rows,fields] = await (await db).execute("SELECT * from user");
    // console.log(rows)
    // u= rows[0].username;
    // e= rows[0].email;
    // p= rows[0].password;

    res.json(mydb)

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
