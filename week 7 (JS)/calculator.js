


do{
    let userInput = parseInt(prompt(`Calculator
        1. Addition
        2. Subtraction
        3. Multiplication
        4. Division
        Select Operation: `))

    let num1 = parseInt(prompt("Enter number1: "))
    let num2 = parseInt(prompt("Enter number2: "))

    switch(userInput) {
        case 1:
            alert(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case 2:
            alert(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case 3:
            alert(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case 4:
            alert(`${num1} / ${num2} = ${num1 / num2}`);
            break;

        default:
            alert(`Invalid Input`);
            break;
    }

    repeat = prompt("Do you want to continue? (Yes / No): ")
} while(repeat == "Yes");