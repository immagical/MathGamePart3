 player1  = localStorage.getItem("player1"); 
 player2  = localStorage.getItem("player2"); 
 console.log(player1 + player2)
 document.getElementById("player1name").innerHTML = player1;
 document.getElementById("player2name").innerHTML = player2;

 function send() {
    number1 = document.getElementById("number1input").value; 
    number2 = document.getElementById("number2input").value; 
    actualanswer = parseInt(number1) * parseInt(number2); 
    question = ' <h4 id = "question">'+ number1 + " * " + number2+' </h4>'
    input = '<br><h4 id = "answerlabel"> Answer: <input id = "answerinput" class = "form-control" type = "number"></h4>'
    check = '<button class = "btn btn-warning" id = "checkbtn"> Check </button>'
    row = question + input + check; 
    document.getElementById("output").innerHTML = row; 
    document.getElementById("number1input").value = ""; 
    document.getElementById("number2input").value = "";  

 }