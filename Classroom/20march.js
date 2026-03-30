//asynchronous programming


// let promise = new Promise((resolve, reject)=>{
//     let success =false;
//     if(success)
//         resolve("Data Loaded");
//     else
//         reject("Error Occured");
// })
// promise.then(result => console.log(result)).catch(error => console.log(error));

// async function getData({
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();
//     console.log(data)
    
// })

fetch("https://jsonplaceholder.typicode.com/posts")

// error handling
// it can be handled using try...catch

// try{
//     var x = y + 10;
// }
// catch(error){
//     console.log(error.message);
// }

// local storage allows data to be stored in the browser permanently

localStorage.setItem("name", "Ayush");

// retrieve data
var nasme1 = localStorage.getItem("name");
console.log(nasme1);

// remove data
localStorage.removeItem("name");

// store object

var user = {name:"Ayush", age: 29};
localStorage.setItem("user", JSON.stringify)
