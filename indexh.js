//Using generators to loop through the set
// var arr = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 44, 4, 4, 4, 4, 4, 55, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 7];
// var arr = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'd', 'd'];
var arr = [true, true, true, true, true, false, false];
let set = new Set(arr);
// let myArr = Array.from(set);
let len = set.size;
// let len = myArr.length;
function* SetGen() {
    let i = 0;
    while (i < len) {
        yield Array.from(set)[i];
        // yield myArr[i];
        i++;
    }
}
let setGen = SetGen();
for (let i = setGen.next(); i.done !== true; i = setGen.next()) {
    console.log(i.value);
}
