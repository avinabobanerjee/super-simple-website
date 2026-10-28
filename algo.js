const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Note: eval() is used here for simplicity in basic tutorials.
        // For production, consider using a safer math parsing library.
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}   