let clickedButtons = '';
const acceptedChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '*', '-', '+', '.'];
const acceptedOps = ['+', '-', '/', '*'];

document.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        submit();
    }
    if (acceptedChars.includes(event.key)) {
        handleButtonClick(event.key);

    }

    if (event.key === 'Escape') {
        clickedButtons = '';
        document.querySelector('.showbar').textContent = clickedButtons;

    }
});

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
    let numsAndOperators=[];
    let result=0;
    let listOfOperators = [];

    if (typeof clickedButtons === 'number') {
        result = clickedButtons;
    } else {
        
        let stringChars = clickedButtons.split('');
        if (acceptedOps.includes(stringChars[0])) {
            stringChars.shift();
        }

        for (let i = 0; i < stringChars.length; i++) {
            if (acceptedOps.includes(stringChars[i])) {
                listOfOperators.push(stringChars[i]);
            }
        }

        // Create a regular expression dynamically by joining the delimiters with the " | " (OR) operator
        const delimiterRegExp = new RegExp(acceptedOps.map(delimiter => '\\' + delimiter).join('|'), 'g');
        numsAndOperators = clickedButtons.split(delimiterRegExp);
    }

    if (numsAndOperators && numsAndOperators.length === 2) {
        let num1 = parseFloat(numsAndOperators[0]);
        let num2 = parseFloat(numsAndOperators[1]);

        result = calculate(num1, num2, listOfOperators[0]);
    }

    // Do something with the result
    if (result !== undefined) {
        document.querySelector('.showresults').textContent = result;
    }

    clickedButtons = result;

}


function calculate(num1, num2, op) {
    let f;
    switch (op) {
        case '+':
            f = num1+num2;
            break;
        case '-':
            f = num1-num2;
            break;
        case '*':
            f = num1*num2;
            break;
        case '/':
            f = num1/num2;
            break;
        default:
            console.log("Invalid operator");
            break;
    }
    return f;
}