const numbers = document.querySelectorAll('.numbers div');
const operations = document.querySelectorAll('.operators div');
const input = document.querySelector('.input');
const equal = document.querySelector('.equal');

const operators = ["÷", "-", "+", "×"];

numbers.forEach(number => {
    number.addEventListener("click", () => {
        input.innerText += number.innerText;
    });
});

document.addEventListener("keydown",(e) => {
    switch(e.key) {
        case "1":
        input.innerText += e.key;
        break;
        case "2":
        input.innerText += e.key;
        break;
        case "3":
        input.innerText += e.key;
        break;
        case "4":
        input.innerText += e.key;
        break;
        case "5":
        input.innerText += e.key;
        break;
        case "6":
        input.innerText += e.key;
        break;
        case "7":
        input.innerText += e.key;
        break;
        case "9":
        input.innerText += e.key;
        case "0":
        input.innerText += e.key;
        break;
        default:
        
    }
});


operations.forEach(operation => {
    operation.addEventListener("click", () => {
        if(input.innerText.trim().length === 0 || operators.includes(input.innerText.trim().slice(-1))){
            
        }else{
            input.innerText += operation.innerText;
        }
        
    });  
});

equal.addEventListener("click", () => {
    let result = 0;
    let currentOperation;
    if(operators.includes(input.innerText.trim().slice(-1))){
        alert("Last character should be a number")
    }else{
        inputArr = input.innerText.split("");
        console.log(inputArr);
        for (let i = 0; i < inputArr.length; i++) {
           if(operators.includes(inputArr[i])){
            currentOperation = inputArr[i];
            console.log(currentOperation);
           }else{
            if(operators.includes(inputArr[i+1])){
                if(i == 0){
                    result = inputArr[i];
                }else{
                    switch(currentOperation) {
                        case "+":
                        result += parseInt(inputArr[i]); 
                        break;
                        case "-":
                        result -= parseInt(inputArr[i])
                        break;
                        case "÷":
                        result = result / parseInt(inputArr[i]);
                        break;
                        case "×":
                        result = result *  parseInt(inputArr[i]);
                        break;
                        default:
                        
                    }
                }
            }else{


                if(i == 0){
                    result = parseInt(inputArr[i] + inputArr[i+1]) ;
                }else{
                    switch(currentOperation) {
                        case "+":
                        result += parseInt(inputArr[i]+ inputArr[i+1]); 
                        break;
                        case "-":
                        result -= parseInt(inputArr[i]+ inputArr[i+1])
                        break;
                        case "÷":
                        result = result / parseInt(inputArr[i]+ inputArr[i+1]);
                        break;
                        case "×":
                        result = result *  parseInt(inputArr[i]+ inputArr[i+1]);
                        break;
                        default:
                        
                    }
                }


            }
           }
        }
    input.innerText = result;        
    }
});