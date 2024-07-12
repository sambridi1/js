
//Task1

//To Declare variable of different data types: string,number,boolean,null,undefined,objects and array
// //print each variable and its type using kindof keyword

let name="Sambridi"; //string
let  age=20;          //number
let  isStudent="true";//boolean
let x =null;     //null
let y;           //undefined
let student={                    //object
    name: "Sambridi",
    age : 20   
};

let fruits = ["apple","orange","banana"]; //array always comes in big bracket
console.log(student, typeof student);  
console.log(name,typeof name);
console.log(age,typeof age);
console.log(isStudent,typeof student);
console.log(x,typeof x);
console.log(y,typeof y);
console.log(fruits,typeof fruits);


//Task2
// //Declare a variable and assign a value to it outside the function.
// //Describe a variable inside a block using let and var and try to access it outside the function 
let height = 67;
function showHeight(){
    let height=35;
    console.log("Inside function:" + height);
}
showHeight();
console.log("outside function:", +height) //kun print hunxa vana



// Task3
// //write a program that takes a user's name and age as input and prints a greeting messege. 
// //the program should check the user's age and print a different messege if the user is under 18.......... Use if else like this if(userAge<18){
// // console and rest of code}

let userName= "Sambridi" ;
let userAge= 3;

if (userAge<18){
    console.log(`Hello ${userName}, You are under 18.`);
}
else{
    console.log(`Hello ${userName}, Welcome!.`)
}

