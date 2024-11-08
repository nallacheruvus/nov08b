const { BankAccount } = require("./moda");

/**
 * Function which returns a test data for bank accounts
 * @author satishn
 */
function bankArr() {
    let bArr = [];
    let arr1 = [1111, 222, 33333, 444444, 5555];
    let arr2 = ["SBI", "ICICI", "BOB", "HDFC", "AXIS"];
    let arr3 = ["James", "Zeenat", "Rahul", "Ram", "Kaivalya"];
    for (let i = 0; i < arr1.length; i++) {
        const bAct = new BankAccount(arr1[i], arr2[i], arr3[i]);
        bArr.push(bAct);
    }
    return bArr;
}
module.exports.bankArr = bankArr;