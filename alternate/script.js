let operators = ["+", "-", "*", "/"];
let operation = ["", "", ""];
let evaluation = [""];
let decimal = ["", ""];
const resetDisplay = document.querySelector('.calc-display');
const buttonAll = document.querySelectorAll('button');
const buttonsArray = Array.from(buttonAll);
const display = document.querySelector('.calc-display');
const buttons = document.querySelectorAll('button');


function add(a, b) {
  let intA = parseInt(a);
  let intB = parseInt(b);
  let result = intA + intB;
  console.log("a + b = ", result.toString());
  return result.toString();
} 
function subtract(a, b) {
  let intA = parseInt(a);
  let intB = parseInt(b);
  let result = intA - intB;
  console.log("a - b = ", result.toString());
  return result.toString();
}
function multiply(a, b) {
  let intA = parseInt(a);
  let intB = parseInt(b);
  let result = intA * intB;
  console.log("a * b = ", result.toString());
  return result.toString();
}
function divide(a, b) {
  let intA = parseFloat(a);
  let intB = parseFloat(b);
  if (intB === 0) {
    let errorMessage = "How dare you!";
    return errorMessage;
  } else if (intA % 1 === 0 && intB % 1 === 0) {
    console.log("intA = ", intA);
    console.log("intB = ", intB)
    intA = parseInt(a);
    intB = parseInt(b);
    let result = (intA / intB);
    console.log("a / b = ", result.toString());
    return result.toString();
  } else if (intA % 1 !== 0 && intB % 1 === 0) {
    console.log("*intA = ", intA);
    console.log("*intB = ", intB);
    intA = parseFloat(a);
    intB = parseInt(b);
    let result = (intA / intB).toFixed(2);
    console.log("a / b = ", result.toString());
    return result.toString();
  } else if (intA % 1 === 0 && intB % 1 !== 0) {
    console.log("**intA = ", intA);
    console.log("**intB = ", intB);
    intA = parseInt(a);
    intB = parseFloat(b);
    let result = (intA / intB).toFixed(2);
    console.log("a / b = ", result.toString());
    return result.toString();
  } else {
    let intA = parseFloat(a);
    let intB = parseFloat(b);
    let result = (intA / intB).toFixed(2);
    console.log("a / b = ", result.toString());
    return result.toString();
  }
}

function operate(a) {
  console.log("a[1] = ", a[1]);
  if (operation[2] === "") {
    display.textContent = evaluation[evaluation.length - 1];
    return;
  } else {
    switch (a[1]) {
      case '+':
        evaluation.shift();
        evaluation.push(add(a[0], a[2]));
        operation[0] = evaluation[evaluation.length - 1];
        display.textContent = evaluation[evaluation.length - 1];
        console.table(a);
        console.log("operation[0] = ", operation[0]);
        break;
      case '*':
        evaluation.shift();
        evaluation.push(multiply(a[0], a[2]));
        operation[0] = evaluation[evaluation.length - 1];
        display.textContent =  evaluation[0];
        console.table(a);
        console.log("operation[0] = ", operation[0]);
        break;
      case '-':
        evaluation.shift();
        evaluation.push(subtract(a[0], a[2]));
        operation[0] = evaluation[evaluation.length - 1];
        display.textContent =  evaluation[0];
        console.table(a);
        console.log("operation[0] = ", operation[0]);
        break;
      case '/':
        evaluation.shift();
        evaluation.push(divide(a[0], a[2]));
        operation[0] = evaluation[evaluation.length - 1];
        display.textContent =  evaluation[0];
        console.table(a);
        console.log("operation[0] = ", operation[0]);
        break;
      default:
        console.log("no numbers have been entered");
    } 
  }
  
}

buttons.forEach((button) => {
  button.addEventListener('click', function(e) {
    const buttonValue = e.target.textContent;
    if (!isNaN(buttonValue)) {
     console.log(`${buttonValue} was fired`);
     console.log("operation[0] =", operation[0]);
      if (operation[0] === "" && operation[1] === "") {
        operation[0] = buttonValue;
        display.textContent = operation[0];
        console.log("first operand clicked");
        console.log("*operation[0] =", operation[0]);
      } else if (operation[0] !== "" && operation[1] === "") {
        operation[0] += buttonValue;
        display.textContent = operation[0] + operation[0];
        console.log("first operand added");
        console.log("**operation[0] =", operation[0]);
      } else if (operation[1] !== "" && operation[2] === "") {
        operation[2] = buttonValue;
        display.textContent = operation[2];
        console.log("second operand clicked");
        console.log("*operation[2] =", operation[2]);
      } else if (operation[1] !== "" && operation[2] !== "") {
        operation[2] += buttonValue;
        display.textContent = operation[2];
        console.log("second operand added");
        console.log("**operation[2] =", operation[2]);
      }
    } else {
      if (buttonValue !== "clear" && buttonValue !== "=" && buttonValue !== ".") {
       console.log(`${buttonValue} was fired`);
        if (operation[1] !== buttonValue) {
          console.log("evaluation = ", evaluation);
          operation[1] = buttonValue;
          console.log("operation[1] = ", operation[1]);
        } else {
          console.log("*evaluation = ", evaluation);
          console.log("*operation[1] = ", operation[1]);
          console.log("operation[2] = ", operation[2]);
          operation[1] = buttonValue;
          console.log("**operation[1] = ", operation[1]);
          operate(operation);
          console.log("**evaluation = ", evaluation);
          operation[2] = "";
          decimal = ["", ""];
        }
      } else if (buttonValue === "=") {
        console.log(`${buttonValue} was fired`);
        operate(operation);
        operation[0] = evaluation[evaluation.length - 1];
        operation[1] = "";
        operation[2] = "";
        decimal = ["", ""];
      } else if (buttonValue === ".") {
        if (operation[0] === "" && operation[1] === "") {
          operation[0] = buttonValue;
          decimal[0] = buttonValue;
          display.textContent = operation[0];
          console.log("first decimal clicked");
          console.log("decimal[0] = ", decimal[0]);
          console.log("operation[0] =", operation[0]);
        }
        else if (operation[0] !== "" && operation[1] === "") {
          if (decimal[0] !== "") {
            decimal[0] = buttonValue;
            console.log("decimal NOT added to operation[0]");
            console.log("**operation[0] =", operation[0]);
          } else {
            operation[0] += buttonValue;
            decimal[0] = buttonValue;
            display.textContent = operation[0]
          }
        } 
        else if (operation[2] === "" && operation[1] !== "") {
          operation[2] = buttonValue;
          decimal[1] = buttonValue;
          display.textContent = operation[2];
          console.log("second operand clicked");
          console.log("decimal[1] = ", decimal[1]);
          console.log("*operation[2] =", operation[2]);
        }
        else if (operation[2] !== "" && operation[1] !== "") {
          if (decimal[2] !== "") {
            decimal[1] = button.Value
          } else {
            operation[2] += buttonValue
            decimal[1] = buttonValue;
            display.textContent = operation[2];
          } 
        } else {
          console.log("something went wrong");
        }
      } else {
        console.log(`${buttonValue} was fired`);
        operation = ["", "", ""];
        decimal = ["", ""];
        console.log("operation[0] =", operation[0]);
        console.log("evaluation = ", evaluation);
        evaluation.shift();
        console.log("evaluation = ", evaluation);
        display.textContent = "";
      }
    }
  });
});