let current = document.querySelector(".current");
let result = document.querySelector(".result");
let oldResult = document.querySelector(".oldResult");
let clear = document.querySelector(".clear");
let backspace = document.querySelector(".backspace");
let ans = document.querySelector(".ans");
let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");
let equal = document.querySelector(".equal");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let dot = document.querySelector(".dot");
let power = document.querySelector(".power");
let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let temp;

zero.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = "0";
    }
    else {
        current.textContent += "0";
    }
})

one.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = "1";
    }
    else {
        current.textContent += "1";
    }
})

two.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = "2";
    }
    else {
        current.textContent += "2";
    }
})
three.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = "3";
    }
    else {
        current.textContent += "3";
    }
})
four.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = "4";
    }
    else {
        current.textContent += "4";
    }
})
five.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = "5";
    }
    else {
        current.textContent += "5";
    }
})
six.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = "6";
    }
    else {
        current.textContent += "6";
    }
})
seven.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = "7";
    }
    else {
        current.textContent += "7";
    }
})
eight.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = "8";
    }
    else {
        current.textContent += "8";
    }
})
nine.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = "9";
    }
    else {
        current.textContent += "9";
    }
})

dot.addEventListener("click", () => {
    current.textContent += ".";
})

clear.addEventListener("click", () => {
    if (result.textContent !== "") {
        oldResult.textContent = current.textContent;
        oldResult.textContent += "=" + result.textContent;
    }
    let previousAnswer = result.textContent;
    current.textContent = "0";
    result.textContent = "";
    return previousAnswer;
    
})

backspace.addEventListener("click", () => {
    let value = current.innerHTML;
    if(value === "0"){
        current.textContent = "0";
    }
    else {
        current.textContent = current.textContent.slice(0, -1);
    }
})

ans.addEventListener("click", () => {
    if(current.textContent === "0"){
        current.textContent = temp;
    }
    else {
        current.textContent += temp;
    }
})

plus.addEventListener("click", () => {
    current.textContent += "+";
})

minus.addEventListener("click", () => {
    current.textContent += "-";
})

equal.addEventListener("click", () => {
    result.textContent = eval(current.textContent);
    temp = result.textContent;
})
multiply.addEventListener("click", () => {
    current.textContent += "*";
})
divide.addEventListener("click", () => {
    current.textContent += "/";
})

power.addEventListener("click", () => {
    current.textContent += "**";
})
