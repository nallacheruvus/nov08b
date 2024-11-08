const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dline = () => { console.log("_".repeat(70)); }
//how to get iterator for this array
const itr = arra[Symbol.iterator]();
for (let i = itr.next(); i.done !== true; i = itr.next()) {
    console.log(i.value);
}
dline()
const arrb = [1.12222, 34.5666666, 7.666666, 9.987, 64646.6565656];
const itrb = arrb[Symbol.iterator]();
for (let i = itrb.next(); i.done !== true; i = itrb.next()) {
    console.log(i.value);
}
dline();
const arrc = [true, true, true, false, false];
const itrc = arrc[Symbol.iterator]();
for (let i = itrc.next(); i.done !== true; i = itrc.next()) {
    console.log(i.value);
}
dline();
const arrd = ["Physics", "Chemistry", "Mathematics", "Geology", "Botany"];
const itrd = arrd[Symbol.iterator]();
for (let i = itrd.next(); i.done !== true; i = itrd.next()) {
    console.log(i.value);
}
dline();
