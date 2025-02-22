// money = parseFloat(prompt('Enter the change:'))
money = 11.56
console.log('money', money);
if (isNaN(money)) {
    console.log('Please enter the proper Number');
}
console.log(`Your amount ${money} consists of`);
console.log((money - 11)*100);

let Dollar = Math.floor(money)
        money = money - Dollar
        console.log(`${Dollar} Dollars`);
let cents = Math.floor(money*100)
        console.log("🚀 ~ cents:", cents)
        cents = cents - cents
        money = money - (cents/100)
        console.log("🚀 ~ money:", money)
        console.log("🚀 ~ cents:", cents)

// while (money > 0) {
//     if (money > 1) {
//         let Dollar = Math.floor(money)
//         money = money - Dollar
//         console.log(`${Dollar} Dollars`);
//     }
//     else {
//         let cents = Math.floor(money*100)
//         console.log("🚀 ~ cents:", cents)
//         cents = cents - cents
//         money = money - (cents/100)
//         // if (cents == 0) {
//         //     console.log(`${cents} cents`);
//         // } else if (cents > 25) {
//         //     let quarter = Math.floor(cents / 25)
//         //     console.log(`${quarter} quarter`);
//         //     cents = cents - quarter * 25
//         //     money = money - parseFloat(`0.${quarter * 25}`)
//         // } else if (cents > 10) {
//         //     let dime = Math.floor(cents / 10)
//         //     console.log(`${dime} dime`);
//         //     cents = cents - quarter * 10
//         //     money = money - parseFloat(`0.${dime * 10}`)
//         // } else if (cents > 5) {
//         //     let nickel = Math.floor(cents / 5)
//         //     console.log(`${nickel} nickel`);
//         //     cents = cents - quarter * 5
//         //     money = money - parseFloat(`0.${nickel * 5}`)
//         // } else {
//         //     console.log(`${cents} cents`);
//         //     cents = cents - cents
//         //     money = money - parseFloat(`0.${cents}`)
//         // }
//     }
// }
