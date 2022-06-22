function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
;
function getTest(obj) {
    if (obj) {
        var msg_1 = "".concat(obj.value, "\u7684").concat(obj.size, ",").concat(obj.isOk == true ? '合适' : '不合适');
        return msg_1;
    }
    else {
        return msg;
    }
}
var testobj1 = { size: 25, value: 'shoes', isOk: false };
var msg = getTest(testobj1);
console.log(msg, 27);
