var display = document.getElementById("current");
let calculations = new Array();
let justUpdated = false;

function changeDisplay(text=null) {
    if (text === null) {
        display.textContent = "0"
        return;
    }
    if (display.textContent.length >= 18) return;
    if (display.textContent.charAt(0) == '0' || justUpdated) {
        display.textContent = text;
        justUpdated = false;
    }
    else display.textContent = display.textContent + text;
}

function clearAll() {
    changeDisplay();
    calculations = new Array();
    let justUpdated = false;
}

function updateCalculation() {
    let equation = calculations[0] + calculations[1] + calculations[2];
    console.log(equation);
    changeDisplay(String(eval(equation)));
    calculations = new Array(String(eval(equation)), calculations[3]);
}

function changeSign() {
    if (display.textContent == "0") return;
    changeDisplay(String(display.textContent.valueOf() * -1));
}

function percent() {
    if (display.textContent == "0") return;
    changeDisplay(String(display.textContent.valueOf() / 100));
}

function divide() {
    if (display.textContent == "0") return;
    calculations.push
}

var numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        changeDisplay(numbers[i].textContent)
    })
}

document.getElementById("pos-neg").addEventListener("click", () => {changeSign()})
document.getElementById("percent").addEventListener("click", () => {percent()})

var calButtons = document.getElementsByClassName("calculation");

for (let i = 0; i < calButtons.length; i++) {
    calButtons[i].addEventListener("click", () => {
        console.log(calButtons[i].textContent);
        console.log(calculations);
        calculations.push(display.textContent);
        display.textContent = "";
        calculations.push(calButtons[i].textContent)
        if (calculations.length == 4) {
            updateCalculation();
            justUpdated = true;
        }
    })    
}

document.getElementById("equal").addEventListener("click", () => {
    if (justUpdated) return;
    let equation = calculations[0] + calculations[1] + display.textContent;
    console.log(equation);
    let answer = String(eval(equation));
    display.textContent = answer;
    calculations = new Array();
    justUpdated = true;
});