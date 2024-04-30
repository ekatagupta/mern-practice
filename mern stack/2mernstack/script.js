// // console.log('hello');

// const fs = require("fs");
// const http = require("http"); // Add this require statement for the http module

// const data = fs.readFileSync("./data.json", "utf8");
// const dataobj = JSON.parse(data).product;

// // console.log(dataobj)
// const cardTemplate = `
// <div class ="product<card>
// <h3>TITLE</h3>
// <img src ="$img_src$" alt='product=i,age'
// </div>
// `;

// let result =[];
// for(let i=0; i<dataobj.length; i++){
//     let temp = cardTemplate;
//     temp = temp.replace('$TITLES',dataobj[i].title);
//     temp = temp.replace('$img_src$',dataobj[i].images[0]);
//     result.push(cardTemplate);
// }
// result = result.join('');
// // console.log(result);
// const server = http.createServer((req, res) => {
//     const route = req.url;
//     console.log('\n',path,'\n');
//     const path = url.parse(route,);
//     console.log('\n',path,'\n');
//     res.end(cardTemplate);
// });

// server.listen(1400); // Corrected variable name to serve

const express = require('express')

application.get('/home',(req, res)=>{
    res.send("this is home page");
});









