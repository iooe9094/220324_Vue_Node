const { odd, even } = require("./var.js");
const checkOddOrEven = require("./func.js");
// checkOddOrEven 대신 다른 변수를 넣어줘도 상관 없음

// 문자열 길이가 홀수인지 짝수인지 판단하는 함수
function checkStringOddOrEven(str) {
    if(str.length % 2 == 1) {
        return odd;
    }
    return even;
}

console.log(checkOddOrEven(10));

// 문자열 길이가 짝수인지 홀수인지 판별
console.log(checkStringOddOrEven("Hello"));