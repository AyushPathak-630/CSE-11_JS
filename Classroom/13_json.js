var text = '{"employees": ['+
'{"firstName": "John","lastName":"Doe"},'+
'{"firstName":"Anna", "lastName":"Smith"},'
'{"firstName":"peter","lastName":"Jones"}}}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName+" "+obj.employees[1].lastName;

// for...in Loop object
// for(var key in person){
// console.log(key,person[2])}

// for...of Loop
// arrays, sets, maps
// for(var value of arr){
// cosole.log(value);}

// for...each 
