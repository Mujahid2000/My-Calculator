function calculatePercentage() {
    // Get the current value from the display
    var currentValue = display.show.value;

    // Check if the last character is a number
    if (!isNaN(currentValue[currentValue.length - 1])) {
        // If the last character is a number, calculate the percentage
        display.show.value = eval(currentValue) / 100;
    } else {
        // If the last character is not a number, remove the last character and then calculate the percentage
        display.show.value = eval(currentValue.slice(0, -1)) / 100;
    }
}
