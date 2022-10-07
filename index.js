// const superheroes = require("superheroes");
// var superHero = superheroes.random();
// console.log(superHero);

//const fs  = require('fs');
// fs.appendFile('bilalbilal.txt','sa as as ssa ',function(){
//     console.log('Dosya olusturuldu basarilar.');
// });
//fs.rename('oyo.txt','Deneme.txt',function(){
// console.log("calisti");
//});
const express = require("express");
const bodyParser = require("body-parser");
const {parse} = require("path");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

  
  var sayi1 = parseInt(req.body.ilkSayi);
  var sayi2 = parseInt(req.body.ikinciSayi);
  var sonuc = sayi1 + sayi2;
  res.send(sayi1 + " ve " + sayi2 + " toplaminin sonucu " + "<h1>" + sonuc + "</h1>");
});

app.listen(3000, function () {
  console.log("Server is online and hosting at 3000.");
});