const fs=require('fs');
const http=require("http");
const url=require("url")
const data=fs.readFileSync("./data.json","utf8");
const dataObj=JSON.parse(data).products;
// console.log(dataObj);

const cardTemplate=`
<div class='product-card'>
<h3>$TITLE$</h3>
<img src="$img_src$" alt='product-image'/>
<a href="$product_link$">More Info</a>
</div>`;


let result=[];
for(let i=0;i<dataObj.length;i++){
    let temp=cardTemplate;
    temp=temp.replace('$TITLE$',dataObj[i].title);
    temp=temp.replace('$img_src$',dataObj[i].images[0]);
    temp=temp.replace('$product_link$','/product?id=${i}');
    result.push(temp);
}
result=result.join(' ');


const server=http.createServer((req,res)=>{
    // const route=req.url;
    // console.log(route);
    const {pathname}=url.parse(req.url,true);
    console.log(pathname);
    if(pathname=='/home'){
        res.end(result);
    }
    else if(pathname=='/product'){
        res.end('Product page');
    }
    else{
        res.end('404....Not Found!')
    }
// res.end(result);
});
server.listen(1600);