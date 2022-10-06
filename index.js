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
const app = express();

app.get("/", function (req, res) {
  
    
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log("Server is online and hosting at 3000.");
});
