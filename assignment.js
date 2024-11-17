function agevalidator() {
    var age = parseInt(document.getElementById("agev").value);

    
    while (isNaN(age) ) {
        age = parseInt(document.getElementById("agev").value);
        
    }
    var resultElement = document.getElementById("age");
    if (typeof age === "number") {
        if (age >= 18 ) {
            result = "You are eligible to vote.";
            resultElement.style.color = "green";
        } else {
            result = "You are not eligible to vote.";
            resultElement.style.color = "red";

        }
    }

   
    document.getElementById("age").innerHTML = result;
}

function sum(){
    var num = parseInt(document.getElementById("sumn").value);
    var sum = 0;
    for (var i=1;i<= num;i++){
       sum = sum+i;
    }
    document.getElementById("sum").innerHTML =  sum;
}

function eo(){
var num = parseInt(document.getElementById("eo1").value);

while (isNaN(num)){
        num= parseInt(document.getElementById("agev").value);
     }
     var resultElement = document.getElementById("eo");
if (num%2 == 0){
 result ="The number is Even";
 resultElement.style.color = "green";
}
else{
 result = "The number is Odd";
 resultElement.style.color = "red";
}
document.getElementById("eo").innerHTML = result;
}

function table(){
    var num = parseInt(document.getElementById("tablem").value);
   
   while (isNaN(num)){
           num= parseInt(document.getElementById("tablem").value); 
        }
        var result = "";
        var result1 = "";
        for(let i = 1; i<= 10; i++ ){
            const result = i * num;
        
             result1 += `${num} * ${i} = ${result} <br>` ;
             
        }
       
        document.getElementById("table").innerHTML =  result1;  
}
function sc(){
    const operater = document.getElementById("sc3").value;
    var num1 = parseInt(document.getElementById("sc1").value);
    var num2 = parseInt(document.getElementById("sc2").value);
    while (isNaN(num1)){
            num1= parseInt(prompt("Please enter valid number","")); 
         }
    while (isNaN(num2)){
            num2= parseInt(prompt("Please enter valid number","")); 
         }

         var result = "";

         if (operater == '+') {
            result = num1 + num2;
    
         }
         else if (operater == '-') {
            result = num1 - num2;
          
         }
         else if (operater == '*') {
            result = num1 * num2;
      
         }
         else if (operater == '/') {
            result =  num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
           
         }
         else if (operater == '%'){
            result = num2 !== 0 ? num1 % num2 : "Cannot divide by zero";
         
         } else {
            result = "Invalid operator";
        }
         document.getElementById("sc").innerHTML =  result;  
}