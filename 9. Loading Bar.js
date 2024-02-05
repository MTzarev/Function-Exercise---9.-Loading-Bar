function loadingBar(num) {
    let array = [];
    num = num.toString();
    let symbol1 = `%`;
    let symbol2 = `.`;
    for (let i = num[0]; i <= 9; i++) {
        array += symbol1.repeat(i);
        array += symbol2.repeat(10 - i)
        break;
    }
    let text = "";
    if (num < 100) {
        text += "Still loading...";
        console.log(`${num}% [${array}]`);
        console.log(text);

    } else if (num === 100) {
        text += "100% Complete!";
        console.log(text);
        console.log(`[${symbol1.repeat(10)}]`);

    } else {
        console.log(`Invalid Operation!`);
    }

}
loadingBar(300);
//loadingBar(50);
//loadingBar(100);
