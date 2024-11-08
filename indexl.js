var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["John", "Jeevan", "Rodriguez", "Samuel", "Ram"];
var map = new Map();
for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], arr2[i]);
}
// console.log(map);
//1
function keyIter() {
    var mItra = map.keys();
    for (let i = mItra.next(); i.done !== true; i = mItra.next()) {
        const k = i.value;
        console.log(k + " " + map.get(k));
    }
}
//2
function entrIter() {
    var mItra = map.entries();
    for (let i = mItra.next(); i.done !== true; i = mItra.next()) {
        const k = i.value[0] + " " + i.value[1];
        console.log(k);
    }
}
//3
function valIter() {
    var mItra = map.values();
    for (let i = mItra.next(); i.done !== true; i = mItra.next()) {
        console.log(i.value);
    }
}
//4
function arrIter() {
    var arra = Array.from(map.entries());
    var mItra = arra[Symbol.iterator]();
    for (let i = mItra.next(); i.done !== true; i = mItra.next()) {
        console.log(i.value[0] + " " + i.value[1]);
    }
}
//5
function keyItera() {
    var arra = Array.from(map.keys());
    var mItra = arra[Symbol.iterator]();
    for (let i = mItra.next(); i.done !== true; i = mItra.next()) {
        const key = i.value;
        console.log(key + " " + map.get(key));
    }
}

