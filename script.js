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

const calculator = {
    a: "",
    b: "",
    WriteFirstNumberFunction(event) {
        event.target.classList.add("buttonClicked")
        let neededNumber = elements.newButtonNumbersEl.findIndex((button) => button.classList.contains("buttonClicked"));
        elements.calcSpanEl.textContent += neededNumber + 1;
        calculator.a += `${neededNumber + 1}`;
        event.target.classList.remove("buttonClicked");
},
    WriteSecondNumberFunction(event) {
        event.target.classList.add("buttonClicked")
        let neededNumber = elements.newButtonNumbersEl.findIndex((button) => button.classList.contains("buttonClicked"));
        elements.calcSpanEl.textContent += neededNumber + 1;
        event.target.classList.remove("buttonClicked");
        calculator.b += `${neededNumber + 1}`;
},
    AddOperationFunction(event) {
        event.target.classList.add("operationButtonClicked");
        const neededIndex = elements.operationButtonsEl.findIndex((button) => button.classList.contains("operationButtonClicked"));
        if (elements.operationButtonsEl[neededIndex].classList.contains("plus")) {
            elements.calcSpanEl.textContent += "+";
        } else if (elements.operationButtonsEl[neededIndex].classList.contains("minus")) {
            elements.calcSpanEl.textContent += "-";
        } else if (elements.operationButtonsEl[neededIndex].classList.contains("multiply")) {
            elements.calcSpanEl.textContent += "*";
        } else if (elements.operationButtonsEl[neededIndex].classList.contains("divide")) {
            elements.calcSpanEl.textContent += "/";
        }
        elements.newButtonNumbersEl.forEach((button) => button.removeEventListener("click", calculator.WriteFirstNumberFunction));
        elements.newButtonNumbersEl.forEach((button) => button.addEventListener("click", calculator.WriteSecondNumberFunction));
},
    AddEqualFunction() {
        let answer = "";
        const neededIndex = elements.operationButtonsEl.findIndex((button) => button.classList.contains("operationButtonClicked"));
        if (elements.operationButtonsEl[neededIndex].classList.contains("plus")) {
            answer = `${elements.calcSpanEl.textContent}=${Number(calculator.a) + Number(calculator.b)}`;
        } else if (elements.operationButtonsEl[neededIndex].classList.contains("minus")) {
            answer = `${elements.calcSpanEl.textContent}=${Number(calculator.a) - Number(calculator.b)}`;
        } else if (elements.operationButtonsEl[neededIndex].classList.contains("multiply")) {
            answer = `${elements.calcSpanEl.textContent}=${Number(calculator.a) * Number(calculator.b)}`;
        } else if (elements.operationButtonsEl[neededIndex].classList.contains("divide")) {
            answer = `${elements.calcSpanEl.textContent}=${Number(calculator.a) / Number(calculator.b)}`;
        }
        elements.calcSpanEl.textContent = answer;
    }
} 

console.log(calculator)

elements.newButtonNumbersEl.forEach((button) => button.addEventListener("click", calculator.WriteFirstNumberFunction));
elements.operationButtonsEl.forEach((button) => button.addEventListener("click", calculator.AddOperationFunction));
elements.equalButtonEl.addEventListener("click", calculator.AddEqualFunction)