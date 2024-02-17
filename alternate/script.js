function add(a, b) { // 5, 7
    return a + b;
}
function subtract(a, b) { // 8, 3
    return a - b;
}
function multiply(a, b) { // 6, 9
    return a * b;
}
function divide(a, b) { // 25, 8
   return a / b;
}

let displayOutput = "";
let operand1 = 0; //will be replaced with user input
let operand2 = 0; //will be replaced with user input
let operators = ["+", "-", "*", "/"];
let operator = ""; //twill be replaced with user input
let getRandOperatorIndex = Math.floor((Math.random() * operators.length));  //will be replaced with click event
console.log(getRandOperatorIndex);
function getOperator() {
    operator = operators[getRandOperatorIndex];
}
getOperator(); //for testing

function operate(theOp, a1, a2) {
    for (let i = 0; i < operators.length; i++) {
        if (theOp === operators[0]) {
            add(a1, a2);
        }
        if (theOp === operators[1]) {
            subtract(a1, a2);
        }
        if (theOp === operators[2]) {
            multiply(a1, a2);
        }
        if (theOp === operators[3]) {
            divide(a1, a2);
        }
    }
}
operate(operator, operand1, operand2);

function getOperand1() {

}