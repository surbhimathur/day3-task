//for loop
console.log("For loop");

for(var i=0;i<10;i++)
{
    console.log(i);
}

//for in loop
console.log("For in loop");

var employee={
    name:"Surbhi",
    post:"Web-developer",
    age:29
};
for(var key in employee){
    console.log(`${key} is ${employee[key]}`);
}


//for of loop
console.log("For of loop");

var a=Object.values(employee);
for(var val of a){
console.log(val);
}

//for each loop
console.log("For each loop");

a.forEach(display);
function display(number){ 
 console.log(number);
}
