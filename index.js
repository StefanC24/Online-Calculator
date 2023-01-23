let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
const result = document.getElementById("result")
const operatorType = document.getElementById("operator");

function sum(input1, input2){
    return parseInt(input1) + parseInt(input2)
}

function difference(input1, input2){
    return parseInt(input1) - parseInt(input2)
}

function product(input1, input2){
    return parseInt(input1) * parseInt(input2)
}

function division(input1, input2){
    return parseInt(input1) / parseInt(input2)
}

function calculate(){
    if(operatorType.value == "+"){
        return result.innerHTML = sum(num1.value, num2.value);
    }
    else if(operatorType.value == "-"){
        return result.innerHTML = difference(num1.value, num2.value);
    }
    else if(operatorType.value == "*"){
        return result.innerHTML = product(num1.value, num2.value);
    }
    else if(operatorType.value == "/"){
        return result.innerHTML = division(num1.value, num2.value);
    }
}