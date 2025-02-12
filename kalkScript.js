document.addEventListener("DOMContentLoaded", function () {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const vastus = document.getElementById("vastus4");


    let warningImg = document.getElementById("warning-img");
    if (!warningImg) {
        warningImg = document.createElement("img");
        warningImg.src = "images/haha.jpg";
        warningImg.alt = "Nulliga jagamine on keelatud!";
        warningImg.id = "warning-img";
        warningImg.style.display = "none";
        warningImg.style.width = "200px";
        warningImg.style.marginTop = "10px";
        vastus.appendChild(warningImg);
    }

    function calculate(operator) {
        const val1 = parseFloat(num1.value);
        const val2 = parseFloat(num2.value);

        if (isNaN(val1)) {
            vastus.innerHTML = "<p>Palun sisesta esimene number!</p>";
            warningImg.style.display = "none";
            return;
        }

        if (operator !== "√" && isNaN(val2)) {
            vastus.innerHTML = "<p>Palun sisesta teine number!</p>";
            warningImg.style.display = "none";
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
                if (val2 === 0) {
                    warningImg.style.display = "block";
                    vastus.innerHTML = "<p style='color: red;'>Viga: jagamine nulliga!</p>";
                    vastus.appendChild(warningImg);
                    return;
                }
                result = val1 / val2;
                warningImg.style.display = "none";
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

        vastus.innerHTML = `<p>Tulemus: ${result}</p>`;
        warningImg.style.display = "none";
    }

    // Привязываем кнопки к функции calculate
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            calculate(this.dataset.op);
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
