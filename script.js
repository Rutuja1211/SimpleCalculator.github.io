let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Square function (x²)
function calculateSquare() {
    if (display.value) {
        display.value = Math.pow(parseFloat(display.value), 2);
    }
}

// Cube function (x³)
function calculateCube() {
    if (display.value) {
        display.value = Math.pow(parseFloat(display.value), 3);
    }
}
