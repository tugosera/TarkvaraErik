document.addEventListener("DOMContentLoaded", function () {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const vastus = document.getElementById("vastus4");

    function calculate(operator) {
        const val1 = parseFloat(num1.value);
        const val2 = parseFloat(num2.value);

        if (isNaN(val1)) {
            vastus.textContent = "Palun sisesta esimene number!";
            return;
        }

        if (operator !== "√" && isNaN(val2)) {
            vastus.textContent = "Palun sisesta teine number!";
            return;
        }

        let result;
        switch (operator) {
            case '+':
                result = val1 + val2;
                break;
            case '-':
                result = val1 - val2;
                break;
            case '*':
                result = val1 * val2;
                break;
            case '/':
                result = val2 !== 0 ? val1 / val2 : "Viga: jagamine nulliga!";
                break;
            case '√':
                result = val1 >= 0 ? Math.sqrt(val1) : "Viga: negatiivne arv!";
                break;
            case 'step':
                num1.value = val1 + 1;
                return;
            default:
                result = "Tundmatu operatsioon";
        }

        vastus.textContent = `Tulemus: ${result}`;
    }

    // Обработчики событий для кнопок
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            calculate(this.dataset.op);
        });
    });

    // Обновляем результат в реальном времени
    [num1, num2].forEach(input => {
        input.addEventListener("input", function () {
            if (document.querySelector("button.active")) {
                calculate(document.querySelector("button.active").dataset.op);
            }
        });
    });

    // Выделение активной кнопки
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});




