// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal
var a=+(prompt("Enter number 1:"))
var b=+(prompt("Enter number 2:"))
alert("the largest number is :", a<b || b>a);

// Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
var a1=+(prompt("Enter number 1:"))
if ( a1>0){
    alert("It is postive");
}    
else if ( a1===0){
    alert("It is zero");
}    
else{
    alert("It is nagative");
}    

//  Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 
var b1=prompt("Enter alphabet")
if( b1 in 'aeiouAEIOU'){
    alert("It is vowel");
}
else{
    alert('it is not a vowel');
}
