const { odd, even } = require("./var");

function checkOddOrEven(num) {
    if(num % 2 == 1) {
        return odd;
    }
        return even; // 위의 조건이 거짓이 될 경우가 없는 조건이므로 else {} 굳이 안써도 됨.
}

module.exports = checkOddOrEven;