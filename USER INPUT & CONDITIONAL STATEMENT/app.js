// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
var city=prompt("Enter your city name?");
if ( city === "karachi"){
    document.write("Welcome to the city of lights");
}
else{
    break
}
// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am
var gen=prompt("Enter your Gender?");
if ( gen === "male"){
    document.write("Welcome Sir");
}
else{
    document.write("Welcome Ma'am");
}


// 3. Write a program to take input color of road traffic signal from the user & show the message 
document.write("Signal \xa0 \xa0 \xa0 \xa0"," Message<br>")
var sig=prompt("Enter Signal's colour?");
var sig1=prompt("Enter Signal's colour?");
var sig2=prompt("Enter Signal's colour?");
if ( sig === "red"){
    document.write(sig ,"\xa0 \xa0 \xa0 \xa0"," Must stop<br>");
}
if ( sig1 === "yellow"){
    document.write(sig1," \xa0 \xa0 \xa0 \xa0"," Ready to move<br>");
}
if ( sig2 === "green"){
    document.write(sig2," \xa0 \xa0 \xa0 \xa0"," move now <br>");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var fuel=prompt("Enter Fuel amount?");
if ( fuel==="0.25"){
    document.write("Please refill it now");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
 // b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 
 
// c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 
 
// d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
 
// e. if (true){ alert("True"); } if (false){ alert("False"); }  

// f. if("car" < "cat"){ alert("car is smaller than cat"); } 
// ---------------------
// a: 
var a = 4;
if (++a === 5){ alert("given condition for variable a is true"); } 
// b:
var b = 82; 
if (b++ === 83){ alert("given condition for variable b is true"); } 
// c:
var c = 12; 
if (c++ === 13){ alert("condition 1 is true"); } 
if (c === 13){ alert("condition 2 is true"); } 
if (++c < 14){ alert("condition 3 is true"); } 
if(c === 14){ alert("condition 4 is true"); } 
// d:
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
// e:
if (true){ alert("True"); } 
if (false){ alert("False"); }
// f:
if("car" < "cat"){ alert("car is smaller than cat"); } 


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. 
document.write("MARKS SHEET <br><br>".bold())
var ttl=300;
var subjj1= +(prompt("Enter First subject marks::"));
var subjj2= +(prompt("Enter First subject marks::"));
var subjj3= +(prompt("Enter First subject marks::"));
var ttl_obt=subjj1+subjj22+subjj3;
// var per="";
var per= (ttl_obt/ttl)*100
var grade="";
var rkms="";
if (per>=80){ grade+="A-one" ; rkms+="Excellent";} 
else if (per<=80 && per>=70){ grade+="A" ; rkms+="Good";} 
else if (per<=80 && per>=70){ grade+="B" ; rkms+="You need to improve";} 
else{
    grade+="Fail" ;rkms+="Sorry";
    
} 
document.write("Total marks : ",ttl,"<br>","Marks Obtained : ",ttl_obt,"<br>","Percentage : ",per,"<br>","Grade : ",grade,"<br>","Remarks : ",rkms);

// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

var sec_num= +(prompt("Think of any number between 0 and 10::"));
var my_num=3;
if(sec_num===my_num){
    alert("Bingo...you think exact right!!!");
}
else if ((sec_num+1)===my_num){
    alert("You are so close!!!");
}
else {
    break;
}
// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 
var numm= +(prompt("Give me any number::"));
if(numm%3===0){
    alert("the number is divisible by 3");
}
else{
    break;
}


// 9. Write a program that checks whether the given input is an even number or an odd number. 
var numb= +(prompt("Give me any number::"));
if(numm%2===1){
    alert("the number is odd");
}
else if(numm%2===0){
    alert("the number is even");
}
else{
    break;
}

