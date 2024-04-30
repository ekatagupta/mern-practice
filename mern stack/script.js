// let arr = [2, 10, 21, 32];

// function printpretty(elem) {
//     console.log(':', elem);
// }

// function printArray(arr) {
//     // for(let i=0;i<arr.length;i++){
//     //     printpretty(arr(i));
//     // }
//     //     arr.forEach(printpretty);
//     // }
//     arr.map((a, b, c) => {
//         console.log(':', elem);


//     });
// }


// printArray(arr);


// function printpretty(elem){
// console.log(':',elem);
// }
// time is in milliseconds
// 


// console.log('prettystart');

// function printpretty(){
//     console.log('prettystart');
//     let ans = 2+3;
//     console.log('prettyend');
// }
//     setTimeout(printpretty,30000);

//     console.log('GEC END');


// const btn = document.getElementarybyId('btn');
// btn.addeventislistener("click",printpretty);

// console.log('start')
// const req=fetch("https://www.google.com/search?q=gitub&rlz=1C1OPNX_enIN1102IN1102&oq=gitub&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIVCAEQLhgKGIMBGMcBGLEDGNEDGIAEMgwIAhAAGAoYsQMYgAQyDAgDEAAYChixAxiABDIMCAQQABgKGLEDGIAEMgkIBRAAGAoYgAQyDAgGEAAYChixAxiABDIGCAcQBRhA0gEIMzc2M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8");

// console.log('req');
// req.then(()=>console.log('Fetched'));
// console.log('End');

// console.log('start')

// const req=fetch('https://dummyjson.com/products/1')
// const res=req.then((res)=>res.json())
// res.then((data)=> console.log(data));
// console.log('End')

// // .then(res => res.json())
// // // .then(json => console.log(json))

// console.log('start')

// fetch('https://dummyjson.com/products/1')
// .then((res)=>res.json())
// .then((data)=> console.log(data))
// .catch(err) => {
// console.log('End')
// }



    console.log("...APP Started...");

   function callApp() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=1fb5e006689343749f05eab91af058e7")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });
}

callApp();

function renderUI(){
    const root = document.getElementById("root");
    const div = document.createElement("div");
    div.innerText = 'card';   
    root.appendChild(div)
    const articles = data.articles;
    console.log(articles);

   
    const ar = articles[0];
    console.log(ar);

    
}
renderUI();
