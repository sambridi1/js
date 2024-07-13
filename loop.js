//FOR LOOP
// for (let i=1;i<=5;i++){
//     console.log("Sambridhi Shrestha");
// }

// for (count=1;count<=5;count++){
//     console.log("Apsara Shrestha");
// }

//To calculate sum of first n numbers
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
//     console.log(sum);
// }

//-----------------------------------------
//WHILE LOOP
//DO WHILE LOOP
//FOR-OF LOOP
//FOR-IN LOOP

// Print all even numbers for 0 to 100.

// for (let num=0;num<=100;num++){
//     if(num%2!==0){//odd
//         console.log(num);
//     }
//     if(num%2===0){//even
//         console.log(num);
//     }
// }


//Create a game where you start with any random game number . Ask the user to keep guessing number until the userr enteres correct value.

//Practise 2

let gameNum =25;
 
let userNum=prompt("Guess the game number :");
while(userNum!=gameNum){
    userNum=prompt("Guess the game number.Guess again :");
}
console.log("congratulations , you entered the right number ");