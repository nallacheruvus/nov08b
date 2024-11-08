const dline = () => { console.log("_".repeat(70)); }
function Books(name, auth) {
    this.name = name;
    this.auth = auth;
    this.toString = function () {
        return `Name:${this.name}\nAuthor:${this.auth}`;
    }
}
const arr1 = ["Ramayan", "Mahabharat", "Who shall tell the president", "Adventures of tom sawyer", "Elephant song"];
const arr2 = ["Valmiki", "Vyas", "J Archer", "Mark Twain", "Wilbur Smith"];
let bArr = [];
// for (let i = 0; i < arr1.length; i++) {
//     let book = new Books(arr1[i], arr2[i]);
//     bArr.push(book);
// }
let j = 0;
let aItr = arr1[Symbol.iterator]();
for (let i = aItr.next(); i.done !== true; i = aItr.next()) {
    let book = new Books(i.value, arr2[j]);
    bArr.push(book);
    j++;
}
// bArr.reverse();
const bItr = bArr[Symbol.iterator]();
for (let i = bItr.next(); i.done !== true; i = bItr.next()) {
    dline();
    console.log(i.value.toString());
    dline();
}
