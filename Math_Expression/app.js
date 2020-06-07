// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
var var1= 3;
var var2= 5;
var sum=var1+var2;
document.write("Sum of 3 and 5 is ",sum);

// 2. Repeat task1 for subtraction, multiplication, division & modulus. 
// Subraction
var sum=var1-var2;
document.write("Subtraction of 3 and 5 is ",sum);
// Multiplication
var sum=var1*var2;
document.write("Product of 3 and 5 is ",sum);
// Division
var sum=var1/var2;
document.write("Division of 3 and 5 is ",sum);

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  
// l. Output : “The remainder is : 0”. 
 
var num;
num=0;
document.write("Value after variable declaration is:",num);
num=5;
document.write(" <br> Initial value: 5 <br>");
num = num +1;
document.write("Value after increment is: 6 <br>");
num= 7 + num;
document.write("Value after addition is: 13 <br>");
num = num - 1 ;
document.write("Value after decrement is: 12 <br>");
num = num%3;
document.write("The remainder is: 0" );

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var ticket=600;
document.write("Amount required to buy 5 tickets is : ",ticket*5);

// 5. Write a script to display multiplication table of any number in your browser
var j = 4;
for (var i=0; i<11 ; i++){
    document.write( j," x ",i,"= ",i*j ,"<br>");
}


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC
var Celsius=25;
var Fahrenheit=70;
var con1=(Fahrenheit-32)*(5/9);
var con2=(Celsius*(5/9))+32;
document.write(Celsius ,"is ", con1);
document.write(Fahrenheit ,"is ", con2);

// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 
var price1= 650;
var price2= 100;
var quan1= 3;
var quan2= 7;
var charges=100;
document.write("Price of item 1 is: ",price1);
document.write("Quantity of item 1 is: ",quan1);
document.write("Price of item 2 is: ",price2);
document.write("Quantity of item 2 is: ",quan2);
document.write("Shipping charges is: ",charges);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 
var ttl = 500;
var obt= 450;
document.write("MARKSHEET".bold(),"<br><br><br>");
document.write("Total marks is",ttl,"<br>");
document.write("Obtained marks is",obt,"<br>");
document.write("Obtained percnetage is",((obt/ttl)*100),"%<br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
var us=10;
var ksa=25;

document.write("URRENCY IN PKR".bold())
document.write("<br> <br> <br> Total currency in Pakistani rupees is :",((us*104.8)+(ksa*28)));


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
var no= 5;
no =no+5; 
no =no*10;
no =no/2;
document.write(no);

// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values
var cur=2020;
var bir=2000;
document.write("AGE CALCULATOR".bold());
document.write("<br><br><br>Curent Year is: ",cur);
document.write("<br>Birth Year is: ",bir);
document.write("<br>Your Age is: ",cur-bir);

// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
document.write("THE GEOMETRIZER".bold())
var r=10;
var circumference= (2*(22/7)*r);
var area=((22/7)*r**2);
document.write("<br>Radius of a circle is:",r);
document.write("<br>Circumference of a circle is:",r);
document.write("<br>Area of a circle is:",r);
 
 
// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 
var snack="biryani";
var age=20;
var max_age=50;
var amt=400;
document.write("<br>Favourite Snack is: ",snack);
document.write("<br>Your age is: ",age);
document.write("<br>Estimated Maximum age will be: ",max_age);
document.write("<br>Amount of snacks per day: ",amt);