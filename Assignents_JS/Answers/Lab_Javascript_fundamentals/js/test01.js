// ================
// Question 1
// ================
console.log('========Q1========');
totalBill = parseInt(prompt('Please enter total bill amount: '))
tipPercentage = 10 //Percentage
tipAmount = (totalBill * 0.10).toFixed(2)
console.log(`For bill of ${totalBill} the tip should be ${tipAmount}`);

// ================
// Question 2
// ================
console.log('========Q2========');
totalBill = prompt('Please enter total bill amount: ')
if (isNaN(totalBill)) {
    console.log('!! Please enter proper amount in the decimal !!');
}
else {
    totalBill = parseInt(totalBill)
    tipPercentage = 10 //Percentage
    tipAmount = (totalBill * 0.10).toFixed(2)
    console.log(`For bill of ${totalBill} the tip should be ${tipAmount}`);
}

// ================
// Question 3
// ================
console.log('========Q3========');
// totalBill = prompt('Please enter total bill amount: ')
// if (isNaN(totalBill)) {
// console.log('!! Please enter proper amount in the decimal !!');
// }
// else {
billTotals = [50, 150, 20, 500]
tips = []
for (let i = 0; i < billTotals.length; i++) {
    const element = billTotals[i];
    tipPercentage = 0 // Percentage
    if (element <= 30) {
        tipPercentage = 30
    } else if (element <= 75) {
        tipPercentage = 20
    } else {
        tipPercentage = 10
    }
    tipAmount = (element * (tipPercentage / 100)).toFixed(0)
    tips.push(tipAmount)
}
// totalBill = parseInt(totalBill)
// tipPercentage = 10 //Percentage
// tipAmount = (totalBill * 0.10).toFixed(2)
for (let i = 0; i < billTotals.length; i++) {
    const element = billTotals[i];
    console.log(`For bill of ${element} the tip should be ${tips[i]}`);
}
// }

// ================
// Question 5
// ================
console.log('========Q5========');
function calculateTip(total) {
    tipPercentage = 0 // Percentage
    if (total <= 30) {
        tipPercentage = 30
    } else if (total <= 75) {
        tipPercentage = 20
    } else {
        tipPercentage = 10
    }
    return (total * (tipPercentage / 100)).toFixed(0)
}

billTotals = [50, 150, 20, 500]
tips = []
for (let i = 0; i < billTotals.length; i++) {
    const element = billTotals[i];
    tipAmount = calculateTip(element)
    tips.push(tipAmount)
}
for (let i = 0; i < billTotals.length; i++) {
    const element = billTotals[i];
    console.log(`For bill of ${element} the tip should be ${tips[i]}`);
}