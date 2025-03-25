class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

const calculator = new Calculator();
console.log(calculator.add(5, 3));        
console.log(calculator.subtract(5, 3));   
console.log(calculator.multiply(5, 3));   
console.log(calculator.divide(5, 3));     
