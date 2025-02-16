function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultElement = document.getElementById("vastus4");
    let result;

    if (isNaN(num1) || (isNaN(num2) && operation !== "√")) {
        resultElement.innerText = "Palun sisesta kehtivad numbrid!";
        return;
    }

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Viga: nulliga jagamine!";
            break;
        case "^":
            result = Math.pow(num1, num2);
            break;
        case "√":
            result = num1 >= 0 ? Math.sqrt(num1) : "Viga: negatiivsest arvust ei saa juurt võtta!";
            break;
    }
    resultElement.innerText = "Vastus: " + result;
}

// Värskendage tulemust tippimise ajal automaatselt
document.addEventListener("DOMContentLoaded", function () {
    let inputs = document.querySelectorAll("#num1, #num2");
    inputs.forEach(input => {
        input.addEventListener("input", function () {
            document.getElementById("vastus4").innerText = "";
        });
    });
});
