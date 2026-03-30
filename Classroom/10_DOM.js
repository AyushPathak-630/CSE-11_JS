// Document Object Model is a hierarichal model 
// window object is object of the browser which is always at top of the hierarchy. It is like an API 

// selecting with id

// const result = document.getElementById("para");
// result.innerHTML = "my self";
// result.title = "myname";
// console.log(result);

// selecting with class

// const result2 = document.getElementsByClassName("p1");
// result2.innerHTML = "hello world";
// result2[1].innerHTML = "hello";
// console.log(result2);

// const res3 = document.getElementsByTagName("p");
// res3[2].innerHTML = "this is a pet";
// res3[1].style.color = "blue";
// res3[1].innerText = "my paragraph";
// console.log(res3);
// console.log(res3[2]);

const test = document.querySelectorAll("ul li");
for(x in test){
    test[x].style.backgroundColor = "green";
    test[x].style.margin = "10px";
    test[x].style.color = "blue";
}

// query selector
//Document.querySelector("myId/myClass/tag") // if class use . before class name
// if id start following # and take as simply

// advantage of query selector is that it can be used for class, id or tag

