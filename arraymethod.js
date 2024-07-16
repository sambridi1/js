//push() //pop() //toString() //concat //unshift //shift //slice //splice

    //push : add to end
// let food =["potato","apple","pizza","fries"];
// food.push("chips");
// console.log(food);

   //pop : delete from end and return
// let alpha=["a","b","c"] ;
// let deletedItem=alpha.pop();
// console.log(alpha);
// console.log("deleted",deletedItem);


 //tostring : converts array to string
// let food =["potato","apple","pizza","fries"];
// console.log(food);
// console.log(food.toString());

// let alpha=["1","2","3"] ;
// console.log(alpha.toString());


//concat: joins muktiple array
// let food =["potato","apple","pizza","fries"];
// let food2=["chips","cake","icecream","chocolate"];
// let food3=food.concat(food2);
// console.log(food3);

// let friend1=["Muskan","Alisha","Unnati"];
// let friend2=["Sadikxhya"];
// let friend3=friend1.concat(friend2);
// console.log(friend3);

//unshift : add to start
// let friend1=["Muskan","Alisha","Unnati"];
// let sadik="sadik";
// let newLength=friend1.unshift(sadik);
// console.log(newLength);
// console.log(friend1);


//shift : delete from start and return
// let friend1=["Muskan","Alisha","Unnati"."];
// let deletedItem=friend1.shift();
// console.log(friend1);

// slice: returns a piece of array
// let friend=["Muskan","Alisha","Unnati","Sambridhi"];
// console.log(friend);
// console.log(friend.slice(1,3));

//splice : change original aray(add,remove,replace)
// let friend=["Muskan","Alisha","Unnati","Sambridhi"];
// // friend.splice(2,2,101,102);//delete and add
// // console.log(friend);
// friend.splice(2,0,3,302);//dont delete only add
// console.log(friend);


//Practise
//Create an array to store companies-"GG","AA","BB","CC","DD"

//a. remove the first company from the arry
// let company=["GG","AA","BB","CC","DD"];

// company.shift();
// console.log(company);


//b. remove BB and CC
// let company=["GG","AA","BB","CC","DD"];
// company.splice(2,2);
// console.log(company);

//c. add amazon at the end
let company=["GG","AA","BB","CC","DD"];
company.push("amazon");
console.log(company);