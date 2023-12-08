
var numOfButs = document.querySelectorAll('button').length;

for (var i=0; i<numOfButs; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function() {
        document.querySelector('.showbar').textContent = this.textContent;
    } );
}

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculate(num1, num2, operator) {
    return operator(num1, num2);
}
