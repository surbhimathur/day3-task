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

var a=[2,4,6,8,10];
for(var val of a){
console.log(val);
}

//for each loop
console.log("For each loop");

const b=[40,20,56,78];
b.forEach(display);
function display(number){ 
 console.log(number);
}
