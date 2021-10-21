"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sizeFormatter(thing, count) {
    writeMessage(`The ${thing}, has got ${count} items`);
}
exports.sizeFormatter = sizeFormatter;
function costFormatter(thing, cost) {
    writeMessage(`The ${thing}, has total of £${count.toFixed(2)}`);
}
exports.costFormatter = costFormatter;
function writeMessage(message) {
    console.log(message);
}
