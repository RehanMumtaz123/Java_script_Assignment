// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:  
var a = 10;
document.write("Result:<br>");
document.write("<br>The value of a is:",a);
document.write("---------------------");

document.write("<br><br>The value of ++a is:",++a);
document.write("<br>Now the value of a is:",a);
document.write("<br><br>The value of a++ is:",a++);
document.write("<br>Now the value of a is:",a);
document.write("<br><br>The value of --a is:",--a);
document.write("<br>Now the value of a is:",a);
document.write("<br><br>The value of a-- is:",a--);
document.write("<br>Now the value of a is:",a);

// 2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 
var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 

document.write(--a);
document.write(--a - --b);
document.write(--a - --b + ++b);
document.write(--a - --b + ++b + b--); 
document.write("a is :",a);
document.write("b is :",b);
document.write("Result is :",result);

// 3. Write a program that takes input a name from user & greet the user. 
var b = prompt("Your name :","Enter Your name...!");
document.write("Welcome ",b,"To JS World");

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. `
var intw= prompt("Enter Table:");
var j = 5;
if ( intw===""){
for (var i=0; i<11 ; i++){
    document.write( j," x ",i,"= ",i*j ,"<br>");
}
}
else{
    for (var i=0; i<11 ; i++){
        document.write( intw," x ",i,"= ",i*(+(intw)) ,"<br>");
    }
    
}

// 6. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 
document.write("SUBJECT \xa0 TOTAL MARKS \xa0 OBTAINED MARKS \xa0 PERCENTAGE <br>".bold())
var subj1=prompt("Enter First subject name::");
var subj2=prompt("Enter Second subject name::");
var subj3=prompt("Enter Third subject name::");
var ttl=100;
var subjj1= +(prompt("Enter First subject marks::"));
var subjj2= +(prompt("Enter First subject marks::"));
var subjj3= +(prompt("Enter First subject marks::"));
document.write(subj1,"\xa0\xa0 ",ttl,"\xa0\xa0\xa0",subjj1,"\xa0\xa0\xa0",((subjj1/ttl)*100),"<br>");
document.write(subj2,"\xa0\xa0 ",ttl,"\xa0\xa0\xa0",subjj2,"\xa0\xa0\xa0",((subjj2/ttl)*100),"<br>");
document.write(subj3,"\xa0\xa0 ",ttl,"\xa0\xa0\xa0",subjj3,"\xa0\xa0\xa0",((subjj3/ttl)*100),"<br>");


