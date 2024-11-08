const myArray = [122, 354, 789, 987, 654, 4445, 9987, 5544, 1244];
const myIterator = {
    cIndex: 0,
    next: function () {
        if (this.cIndex < myArray.length) {
            return {
                value: myArray[this.cIndex++],
                done: false
            }
        } else {
            return { done: true }
        }
    }
}

for (let i = myIterator.next(); i.done !== true; i = myIterator.next()) {
    console.log(i.value);
}