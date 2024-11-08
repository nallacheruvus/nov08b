const arr = ["Geology", "Petrology", "Gemology", "Rock Science", "Geo Archaeology"];
const arrIter = {
    cIndex: 0,
    next: function () {
        if (this.cIndex < arr.length) {
            return {
                value: arr[this.cIndex++],
                done: false
            }
        } else {
            return {
                done: true
            }
        }
    }
}
for (let i = arrIter.next(); i.done !== true; i = arrIter.next()) {
    console.log(i.value);
}