let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["Ram", "Raheem", "Robert", "Reena", "Raju"];
let map = new Map();
let ia = 0;
arr1.forEach(n => {
    map.set(arr1[ia], arr2[ia])
    ia++;
});
// console.log(map);
function* MapGen() {
    let i = 0;
    while (i < map.size) {
        yield Array.from(map)[i];
        i++;
    }
}
let mapGen = MapGen();
let i = mapGen.next();
for (; ;) {
    if (i.done !== true) {
        console.log(i.value);
        i = mapGen.next();
    } else {
        break;
    }
}

