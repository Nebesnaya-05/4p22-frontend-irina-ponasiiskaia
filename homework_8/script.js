'use strict';

const button = document.getElementById('click');
const resultform = document.getElementById('resultform');
  
function func() {
const number1 = document.getElementById('number1').value;
const sign = document.getElementById('sign').value;
const number2 = document.getElementById('number2').value;
let result;

    if (number1 === "") {
        resultform.innerText = "Первое число не указано";
        return console.log("Первое число не указано");
    }
    
    if (number2 === "") {
        resultform.innerText = "Второе число не указано";
        return console.log("Второе число не указано");
    }

    if (number1 === " ") {
        resultform.innerText = "Первое число не указано";
        return console.log("Первое число не указано");
    }
    
    if (number2 === " ") {
        resultform.innerText = "Второе число не указано";
        return console.log("Второе число не указано");
    }
    
    if (isNaN(number1) === true || isNaN(number2) === true) {
        resultform.innerText = "Некорректный ввод чисел";
        return console.log("Некорректный ввод чисел");
    }

    if (sign === "") {
        resultform.innerText = "Не введён знак";
        return console.log("Не введён знак");
    }
     
    switch (sign) {
      case "":
      return console.log("Не введён знак");
        break;
      case '+':
        result = Number(number1) + Number(number2); break;
      case '-':
        result = Number(number1) - Number(number2); break;
      case '/':
        result = Number(number1) / Number(number2); break;
      case '*':
        result = Number(number1) * Number(number2); break;
      default:
      return  resultform.innerText = "Программа не поддерживает такую операцию";
      console.log("Программа не поддерживает такую операцию"); break;
    }

    if (isNaN(result)) {
        resultform.innerText = "Некорректный ввод чисел";
        return console.log("Некорректный ввод чисел");
    }

    if (result === -Infinity || result === Infinity) {
        resultform.innerText = "Операция некорректна";
        console.log("Операция некорректна");
    } 
      
    else {
        resultform.innerText = result;
        console.log(result);
    }
}