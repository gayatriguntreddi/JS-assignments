function agevalidator() {
    var age = parseInt(prompt("Please enter your age:", ""));

    
    while (isNaN(age) ) {
        age = parseInt(prompt("Please enter a valid number:", ""));
        
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
    var num = parseInt(prompt("Please enter the number:",""));
    var sum = 0;
    for (var i=1;i<= num;i++){
       sum = sum+i;
    }
    document.getElementById("sum").innerHTML =  sum;
}

function eo(){
var num = parseInt(prompt("Please enter the number:",""));

while (isNaN(num)){
        num= parseInt(prompt("Please enter valid number","")); 
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
    var num = parseInt(prompt("Please enter the number:",""));
   
   while (isNaN(num)){
           num= parseInt(prompt("Please enter valid number","")); 
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
    const operater = prompt('Enter operator ( either +, -, *, / or % ): ');
    var num1 = parseInt(prompt("Please enter the number:",""));
    var num2 = parseInt(prompt("Please enter the number:",""));
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
            result = num1 / num2;
           
         }
         else  {
            result = num1 % num2;
        
         }
         document.getElementById("sc").innerHTML =  result;  
}