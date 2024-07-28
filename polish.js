function evaluateRPN(expression) {
  const tokens = expression.split(/\s+/);
  const stack = [];

  tokens.forEach((token) => {
    if (!isNaN(parseFloat(token))) {
      stack.push(parseFloat(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case "+":
          stack.push(a + b);
          break;

        case "-":
          stack.push(a - b);
          break;

        case "*":
          stack.push(a * b);
          break;

        case "/":
          if (b === 0) {
            throw new Error("Can not divide by zero");
          }
          stack.push(a / b);
          break;
        default:
          throw new Error(`What is this: ${token}`);
      }
    }
  });
  if (stack.length !== 1) {
    console.log(stack);
    throw new Error("Invalid");
  }
  return stack[0];
}

function calculateRPN() {
  const input = document.getElementById("rpnInput").value.trim();
  const resultElement = document.getElementById("result");

  try {
    const result = evaluateRPN(input);
    resultElement.textContent = `Result: ${result}`;
  } catch (e) {
    resultElement.textContent = `Error: ${e.message}`;
  }
}
