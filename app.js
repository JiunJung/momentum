const age = parseInt(prompt("How old are you",20));

if(isNaN(age) || age < 0){
  console.log("please write number");
} else if(age < 20){
  console.log("you are too young");
} else if(age >= 20 && age <=50){
  console.log("you can drink");
} else{
  console.log("Recommand not to drink.");
}


