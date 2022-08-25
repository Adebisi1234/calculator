// const evil = (fn) => {
//     return new Function("return " + fn)();
// };
  
// // console.log(evil("(12 / 5) * 9 + 9.4 * 2"));
let dom = ''
const equal = document.querySelector('.equal')
const result = document.querySelector('#result')
const num = document.querySelectorAll('.num')
const ac = document.querySelector('.AC')
const numArr = [...num]
let store = document.querySelector('.calc')
let first = ''
let operator = ''

numArr.forEach((x) => {
    if(x != 'A/C'){
        x.addEventListener('click', addToDom)
    }
})



function addToDom() {
    if(!(this.textContent == '=' || this.textContent === '+' || this.textContent === '-' || this.textContent === '/' || this.textContent === '*')){
        // console.log(this.textContent)
        result.innerText += this.textContent
        dom += this.textContent
    }else if (this.textContent === '+' || this.textContent === '-' || this.textContent === '/' || this.textContent === '*') {
        first = dom
        operator = this.textContent
        dom = ''
        result.textContent = ''
        store.innerText += `${first}${this.textContent}`
        console.log(first)
    }else if(this.textContent === '='){
        console.log(operate(operator, first, dom))
        console.log('fuck')
        store.textContent = ''
       result.textContent = operate(operator, first, dom)
    }
}











// numArr.forEach((x) => {
//     if(x != 'A/C' || x != '+' || x != '-' || x != '*' || x != '/'){
//         x.addEventListener('click', addToDom)
//     }else if (x == '+' || x == '-' || x == '*' || x == '/'){
//         first = dom
//         console.log(first)
//     }
// })

ac.addEventListener('click', clear)

function clear() {
    dom = ''
    result.textContent = ''
    store.textContent = ''
}

// function addToDom(e) {
//     if(e.target.textContent != '='){
//         result.innerText += e.target.textContent
//         dom += e.target.textContent
//         // console.log(dom)
//     }


    
// }
// equal.addEventListener('click', equalto)

// function equalto() {
//     result.innerText = evil(dom)
// }
// console.log


// const add = function (num1, num2) {
//     return num1 + num2
// }

// // console.log(add(24,58))

// const subtract = function (num1, num2) {
//     return num1 - num2
// }

// const multiply = function (num1, num2){
//     return num1 * num2
// }

// function divide(num1, num2) {
//     return num1 / num2
// }

// console.log(subtract(23, 20))
// console.log(multiply(23, 20))
// console.log(divide(23, 20))

const operate = function (operator, num1, num2){
    if(operator === '+'){
        return Number(num1) + Number(num2)
    }else if(operator === '-'){
        return Number(num1) - Number(num2)
    }else if(operator === '/'){
        return Number(num1) / Number(num2)
    }else if(operator === '*') {
        return Number(num1) * Number(num2)
    }else {
        return 'Math Error'
    }
}

// console.log(operate('*', 2, 2))