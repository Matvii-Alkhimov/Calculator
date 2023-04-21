const elements = {
    calcSpanEl: document.querySelector(".calc-span"),
    // buttonNumbersEl: document.querySelectorAll(".number"),
    newButtonNumbersEl: Array.from(document.querySelectorAll(".number")),
    operationButtonsEl: Array.from(document.querySelectorAll(".operation-button")),
    plusButtonEl: document.querySelector(".plus-button"),
    minusButtonEl: document.querySelector(".minus-button"),
    multiplyButtonEl: document.querySelector(".multiply-button"),
    divideButtonEl: document.querySelector(".divide-button"),
    equalButtonEl: document.querySelector(".equal-button"),
}

class Calculator {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    add(a, b) {
        return a + b;
    }
    WriteNumberFunction(event) {
        event.target.classList.add("buttonClicked")
        let neededNumber = elements.newButtonNumbersEl.findIndex((button) => button.classList.contains("buttonClicked"));
        elements.calcSpanEl.textContent = `${elements.calcSpanEl.textContent}${neededNumber + 1}`
        event.target.classList.remove("buttonClicked");
        const num = Number(`${elements.calcSpanEl.textContent}${neededNumber + 1}`);
        this.a = num;
}
    // AddOperationFunction(event) {
    //     event.target.classList.add("operationButtonClicked");
    //     let neededIndex = elements.operationButtonsEl.find((button) => button.classList.contains("operationButtonClicked"));
    //     if (elements.operationButtonsEl[neededIndex].classlist.contains("plus"))
    // }
} 

const calculator = new Calculator();



elements.newButtonNumbersEl.forEach((button) => button.addEventListener("click", calculator.WriteNumberFunction));
// elements.operationButtonsEl.forEach((button) => button.addEventListener("click", calculator.AddOperationFunction));