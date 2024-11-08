const { bankArr } = require("./modb");

const arr = bankArr();
/**
 * Custom Reverse Iterator For BankAccounts Array
 */
const bIterator = {
    cIndex: arr.length - 1,
    next: function () {
        if (this.cIndex >= 0) {
            return {
                value: arr[this.cIndex--],
                done: false
            }
        } else {
            return {
                done: true
            }
        }
    }
}
console.log("*".repeat(50));
console.log("Custom Iterator");
console.log("*".repeat(50));
//Iterating using the custom iterator
for (let i = bIterator.next(); i.done !== true; i = bIterator.next()) {
    console.log(JSON.stringify(i.value));
}
console.log("*".repeat(50));
console.log("Built In Iterator");
console.log("*".repeat(50));
const bItr = arr[Symbol.iterator]();
for (let i = bItr.next(); i.done !== true; i = bItr.next()) {
    console.log(JSON.stringify(i.value));
}