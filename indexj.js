let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["Ram", "Raheem", "Robert", "Reena", "Raju"];
let map = new Map();
let ia = 0;
arr1.forEach(n => {
    map.set(arr1[ia], arr2[ia])
    ia++;
});
let sz = map.size;
let arr3 = Array.from(map.keys());
function* MapGen() {
    let i = 0;
    while (i < sz) {
        const tt = `${arr3[i]}\t${map.get(arr3[i])}`;
        yield tt;
        i++;
    }
}
let mapGen = MapGen();
for (let i = mapGen.next(); i.done !== true; i = mapGen.next()) {
    console.log(i.value);
}