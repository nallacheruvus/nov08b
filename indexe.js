const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
function* UGen() {
    var i = 0;
    while (i < 50) {
        yield uuidv4();
        i++;
    }
}
const uGen = UGen();
var str = "";
for (let i = uGen.next(); i.done !== true; i = uGen.next()) {
    str += (i.value.substring(0, 8)) + ";";
}
var nPath = "c:\\delhiofficefiles\\passwords.txt";
const ws = fs.createWriteStream(nPath);
ws.write(str);
ws.close();



