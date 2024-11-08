//iterators for ds(set,map)
var arr = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 222, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 99, 99, 0, 0];
var set = new Set(arr);
// console.log(set);
// var sItr = set.keys();
// var sItr = set.values();
// var sItr = set.entries();
// for (let i = sItr.next(); i.done !== true; i = sItr.next()) {
//     // console.log(i.value);
//     console.log(i.value[1]);
// }
// var arrNew = Array.from(set);
// var sItr = arrNew[Symbol.iterator]();
// for (let i = sItr.next(); i.done !== true; i = sItr.next()) {
//     console.log(i.value);
// }
var arrNew = Array.from(set.entries());
var sItr = arrNew[Symbol.iterator]();
for (let i = sItr.next(); i.done !== true; i = sItr.next()) {
    console.log(i.value[0]);
}