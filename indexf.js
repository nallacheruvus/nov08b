function* MyGen() {
    yield "First Call";
    yield "Second Call";
    yield "Third Call";
    yield "Fourth Call";
    yield "Fifth Call";
    yield "Sixth Call";
    yield "Seventh Call";
    yield "Eighth Call";
    yield "Nineth Call";
    yield "Tenth Call";
}
const myGen = MyGen();
// console.log(myGen.next().value);
// console.log(myGen.next().value);
// console.log(myGen.next().value);
// console.log(myGen.next().value);
for (let i = myGen.next(); i.done !== true; i = myGen.next()) {
    console.log(i.value);
}