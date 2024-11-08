var arr = ["Courtney", "Jackie", "Jennifer", "Camalie", "Reena"];
// var arr = [12, 13, 14, 151, 5, 66, 77, 880, 2, 445, 78];
// var arr = [true, true, true, true, false, false, false, true, false];
// var arr = [{ id: 101, name: "satish" }, { id: 1012, name: "sunder" }, { id: 1333, name: "sanjose" }, { id: 15555, name: "shiva" }, { id: 9987, name: "tom" },]
let len = arr.length;
function* ReadArr() {
    let i = 0;
    while (i < len) {
        yield arr[i];
        i++;
    }
}
let rArr = ReadArr();
for (let i = rArr.next(); i.done !== true; i = rArr.next()) {
    console.log(i.value);
}