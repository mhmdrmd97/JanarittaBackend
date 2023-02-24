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
    
    "exhibitionList": [
      {
        "imgUrl": null,
        "title": null,
        "body": null,
        "header": null,
        "myExhibitionList": null,
      },
      {
        "imgUrl": null,
        "title": "2",
        "body": "22222222222",
        "header": "2",
        "myExhibitionList": ["2", "2", "2", "2"],
      },
    ],
    "theme":{
    "colors":{
    "primaryColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "secondaryColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "generalTextColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "generalBgColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "generalBorderColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},

  "text1ExhibitionColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text2ExhibitionColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text3ExhibitionColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text4ExhibitionColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "bg1ExhibitionColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "bg2ExhibitionColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "border1ColorExhibitionColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "border2ColorExhibitionColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},

  "text1LessonsColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text2LessonsColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text3LessonsColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text4LessonsColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "bg1LessonsColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "bg2LessonsColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "border1ColorLessonsColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "border2ColorLessonsColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},

  "text1DrawerColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text2DrawerColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text3DrawerColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text4DrawerColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "bg1DrawerColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "bg2DrawerColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "border1ColorDrawerColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "border2ColorDrawerColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},

  "text1ShopColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text2ShopColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text3ShopColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "text4ShopColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "bg1ShopColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "bg2ShopColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "border1ColorShopColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},
  "border2ColorShopColor":{"r":0.0,"g":0.0,"b":0.0,"a":0.0}
    },
    "media":{
      "primaryEnlargeScale":1.0,
  "secondaryEnlargeScale":1.0,
  "generalTextEnlargeScale":1.0,
  "generalBgEnlargeScale":1.0,
  "generalBorderEnlargeScale":1.0,

  "text1ExhibitionEnlargeScale":1.0,
  "text2ExhibitionEnlargeScale":1.0,
  "text3ExhibitionEnlargeScale":1.0,
  "text4ExhibitionEnlargeScale":1.0,
  "bg1ExhibitionEnlargeScale":1.0,
  "bg2ExhibitionEnlargeScale":1.0,
  "border1ColorExhibitionEnlargeScale":1.0,
  "border2ColorExhibitionEnlargeScale":1.0,

  "text1LessonsEnlargeScale":1.0,
  "text2LessonsEnlargeScale":1.0,
  "text3LessonsEnlargeScale":1.0,
  "text4LessonsEnlargeScale":1.0,
  "bg1LessonsEnlargeScale":1.0,
  "bg2LessonsEnlargeScale":1.0,
  "border1ColorLessonsEnlargeScale":1.0,
  "border2ColorLessonsEnlargeScale":1.0,

  "text1DrawerEnlargeScale":1.0,
  "text2DrawerEnlargeScale":1.0,
  "text3DrawerEnlargeScale":1.0,
  "text4DrawerEnlargeScale":1.0,
  "bg1DrawerEnlargeScale":1.0,
  "bg2DrawerEnlargeScale":1.0,
  "border1ColorDrawerEnlargeScale":1.0,
  "border2ColorDrawerEnlargeScale":1.0,

  "text1ShopEnlargeScale":1.0,
  "text2ShopEnlargeScale":1.0,
  "text3ShopEnlargeScale":1.0,
  "text4ShopEnlargeScale":1.0,
  "bg1ShopEnlargeScale":1.0,
  "bg2ShopEnlargeScale":1.0,
  "border1ColorShopEnlargeScale":1.0,
  "border2ColorShopEnlargeScale":1.0,

  "mediaFontEnlargeScale":1.0
    
    },    
    
    },
    "lessons": [
    {"name":'Beginner-Lesson 1: Introduction to Art',
      "videoUrl":"bbbbbbbbb",
      "group":"Beginner"
    },
    {"name":'Beginner-Lesson 2: Tools and Vision',
      "videoUrl":"cccccccccccc",
      "group":"Beginner"
    },
    {"name":'Intermediate-Lesson 3: Drawing and Ratios',
      "videoUrl":"ddddddddddd",
      "group":"Intermediate"
    },
    {"name":'Intermediate-Lesson 4: Colors Combinations',
      "videoUrl":"eeeeeeeee",
      "group":"Intermediate"
    },
    {"name":'Advanced-Lesson 5: Advanced Concepts',
      "videoUrl":"ffffffffff",
      "group":"Advanced"
    },
  ],
    "lessonsFilters":[
    'All Lessons',
    'Beginner',
    'Intermediate',
    'Advanced'
  ],
    
    "canvasProducts": [
        {
            "img": "https://jodar-artistry.com/wp-content/uploads/2021/01/Janaritta-Armooti-10.jpg",
            "likes": 0,
            "nameAr": "تجربة ثلاثة",
            "nameEn": "third Image",
            "place": "Jordan",
            "price": 42,
            "subTitleAr":تجربة ثلاثة",
            "subTitleEn":"third Image"
          }
    ]
  },
    "quotes": [
        {
            "name":"hi"
            "img": "https://jodar-artistry.com/wp-content/uploads/2021/01/Janaritta-Armooti-10.jpg"
        }
    ]
  },
    
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
  
//add img 
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
//update img 
app.post("/update",async (req,res)=>{

   mydb =  {"PromoCode": mydb.PromoCode,
   "products": [
    ...mydb.products.map(({img,likes,nameAr,nameEn,place,price,top,left,scaleX,scaleY,angle})=> {
        
        
       if( nameEn == req.body.nameEn) return  {
        "img": req.body.img,
        "likes": req.body.likes,
        "nameAr": req.body.nameAr,
        "nameEn": req.body.newNameEn,
        "place": req.body.place,
        "price": req.body.price,
        "top":req.body.top,
        "left":req.body.left,
        "scaleX":req.body.scaleX,
        "scaleY":req.body.scaleY,
        "angle":req.body.angle
      };

      return  {
        "img": img,
        "likes": likes,
        "nameAr": nameAr,
        "nameEn": nameEn,
        "place": place,
        "price": price,
        "top":top,
        "left":left,
        "scaleX":scaleX,
        "scaleY":scaleY,
        "angle":angle
      };
    
    
    }),
    ]
}

    res.json(mydb.products)

})

//delete img 
app.post("/delete",async (req,res)=>{

   mydb =  {"PromoCode": mydb.PromoCode,
   "products": [
    ...mydb.products.filter(({nameEn})=> nameEn != req.body.nameEn),    
    ]
}

    res.json(mydb.products)

})



//get all data
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
