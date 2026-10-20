

function greet() {
    let name = ("Ruslan","");
    console.log("Привет, " + name + "!");
}

greet();
greet();


function calculate(a, b) {
    return a + b;
}

console.log(calculate(5, 3));
console.log(calculate(10, 20));

function checkAge(age) {
    if (age < 18) {
        return "Доступ запрещён";
    } else {
        return "Доступ разрешён";
    }
}

console.log(checkAge(16));
console.log(checkAge(21));


function checkNumber(number) {
    if (number % 2 === 0) {
        return "Чётное число";
    } else {
        return "Нечётное число";
    }
}

console.log(checkNumber(8));
console.log(checkNumber(5));



function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "На ноль делить нельзя";
            } else {
                return a / b;
            }
        default:
            return "Неизвестная операция";
    }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));


