
const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');


const cats = [
  { 
    id: 1,
    nombre: "Baby", 
    poster: "gato1.jpg", 
    comida_favorita: "Spaghetti", 
    edad: 1, 
    lugar_dormir: ["Under Bed", "In a sunbeam"]
  },
  { 
    id: 2,
    nombre: "Michi", 
    poster: "gato2.jpg", 
    comida_favorita: "Atún", 
    edad: 3, 
    lugar_dormir: ["In the window", "Inside a box"]
  },
  { 
    id: 3,
    nombre: "Tata", 
    poster: "Gato3.jpg", 
    comida_favorita: "Salmon", 
    edad: 10, 
    lugar_dormir: ["on the table", "inside the closet "]
  }
]


app.get("/cats", (req, res) => {
  console.log(cats);
  res.render("cats", { cats : cats });
});

//app.get("/cats_details", (req, res))

app.get("/:codigo", (req, res) => {
  //let gatoenviar ;
  console.log(req.params.codigo);
  res.render("cats_details", { cat : gatoenviar });
  //const codigo = req.params.codigo;

  //for (let cat of cats) {
    //if(codigo == cat.id){
     // gatoenviar = cat;
    //}
  });
  //if(gatoenviar != undefined)*/
  
  //else
    //res.send("vuelve a intentarlo");
  


app.listen( port, () => console.log(`Listening on port: ${port}`) );