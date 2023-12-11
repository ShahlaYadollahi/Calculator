
// var numOfButs = document.querySelectorAll('button').length;

// for (var i=0; i<numOfButs; i++) {
//     document.querySelectorAll('button')[i].addEventListener('click', function() {
//         document.querySelector('.showbar').textContent = this.textContent;
//     } );
// }
let clickedButtons = '';
let acceptedChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '*', '-', '+', '.'];

document.addEventListener("keydown", function(event) {
    if (event.key==='Enter') {
        submit();
    } else if(acceptedChars.includes(event.key)) {
        handleButtonClick(event.key);
    }
})

// Function to handle button clicks
function handleButtonClick(buttonValue) {
    // Append the clicked button value to the string
    if (typeof clickedButtons==='number'){
        if (!isNaN(buttonValue)) {
        clickedButtons = '';
        } else {
            clickedButtons = clickedButtons.toString()+buttonValue;
        }
    } else {
        if (!isNaN(buttonValue)){

        let inNum = buttonValue.toString();
        clickedButtons += inNum;
    }

    else {
        var lastClick = clickedButtons.charAt(clickedButtons.length - 1);
        if (isNaN(lastClick)) {
            clickedButtons = clickedButtons.slice(0, -1);
        }
        clickedButtons += buttonValue;
    }

    document.querySelector('.showbar').textContent = clickedButtons;
}
}
function submit() {

    let listOfOperators = [];
    let stringChars = clickedButtons.split('');
    if (stringChars[0] === "+" || stringChars[0] === "-" || stringChars[0] === "/" || stringChars[0] === "*") {
        stringChars.shift();
    }

    for (i = 0; i < stringChars.length; i++) {
        if (stringChars[i] === "+" || stringChars[i] === "-" || stringChars[i] === "/" || stringChars[i] === "*") {
            listOfOperators.push(stringChars[i]);
        }
        const delimiters = ['/', '+', '-', '*'];

        // Create a regular expression dynamically by joining the delimiters with the " | " (OR) operator
        const delimiterRegExp = new RegExp(delimiters.map(delimiter => '\\' + delimiter).join('|'), 'g');
        var numsAndOperators = clickedButtons.split(delimiterRegExp)

    }
    let num1 = parseFloat(numsAndOperators[0]);
    let num2 = parseFloat(numsAndOperators[1])
    let result = 0;
    switch (listOfOperators[0]) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    document.querySelector('.showbar').textContent = result;
    clickedButtons = result;

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

