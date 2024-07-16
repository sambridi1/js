// let student_marks=[40,84,65,79,93];
// console.log(student_marks,typeof student_makrs);
// console.log(student_marks.length);//property


// let heroes=["ironman","spiderman"];
// console.log(heroes,typeof heroes);
// console.log(heroes.length);//property

// let marks=[40,84,65,79,93];
// marks[2]=66;              //changing index 2
// console.log(marks);         //string =mutable (cant change)  array-mutable(can change index value)

               
                    //looping over an array

  //for loop                  
// let heroes=["0","1","2","3","4"];
// for (let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }


//forin
// let cities=["delhi","pune","mumbai"];
// for(let city of cities);{
//     console.log(city.toUpperCase);
// }


//Practise
// For a given array with marks of student [85,97,44,37,76,60].find avg marks sof entire claass

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum=sum +val;
// }
// let avg=sum/marks.length;
// console.log(`av marks of student=${avg}`);
// //or
// // console.log("avg marks of class =",avg);

//For a given array with prices of 5 items-[250,645,300,900,50]
//All items have an offer of 10% OFF on them . Change the araay to store final price  after applying offer.

// let items=[250,645,300,900,50];
// let i=0;
// for (let val of items){
//     console.log(`val at index ${i}=${val}`);//for of loop
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`value  after offer =${items[i]}`);
//         i++;
// }
