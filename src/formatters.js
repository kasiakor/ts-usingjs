export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing}, has got ${count} items`);
}

export function costFormatter(thing, cost) {
    writeMessage(`The ${thing}, has total of £${count.toFixed(2)}`);
}

function writeMessage(message) {
    console.log(message);
}