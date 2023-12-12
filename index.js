let clickedButtons = '';
let acceptedChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '*', '-', '+', '.'];
const operators = ['+', '-', '/', '*'];

document.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        submit();
    }
    if (acceptedChars.includes(event.key)) {
        handleButtonClick(event.key);

    }

    if (event.key ==='Escape') {
        clickedButtons='';
        document.querySelector('.showbar').textContent = clickedButtons;

    }
})

// Function to handle button clicks
function handleButtonClick(buttonValue) {
    // Append the clicked button value to the string
    if (typeof clickedButtons === 'number') {
        if (!isNaN(buttonValue)) {
            clickedButtons = '';
        } else {
            clickedButtons = clickedButtons.toString() + buttonValue;
        }
    } else {
        if (!isNaN(buttonValue)) {

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
    if (typeof clickedButtons==='number') {
        document.querySelector('.showbar').textContent = clickedButtons;
    } else {
    let listOfOperators = [];
    let stringChars = clickedButtons.split('');
    if (operators.includes(stringChars[0])) {
        stringChars.shift();
    }

    for (i = 0; i < stringChars.length; i++) {
        if (operators.includes(stringChars[i])) {
            listOfOperators.push(stringChars[i]);
        }

        // Create a regular expression dynamically by joining the delimiters with the " | " (OR) operator
        const delimiterRegExp = new RegExp(operators.map(delimiter => '\\' + delimiter).join('|'), 'g');
        let numsAndOperators = clickedButtons.split(delimiterRegExp);

    }
    let num1 = parseFloat(numsAndOperators[0]);
    let num2 = parseFloat(numsAndOperators[1]);
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

