let dom = ''
const equal = document.querySelector('.equal')
const result = document.querySelector('#result')
const num = document.querySelectorAll('.num')
const ac = document.querySelector('.AC')
const numArr = [...num]
let store = document.querySelector('.calc')
let first = ''
let operator = ''


const deleted = document.querySelector('#delete')

deleted.addEventListener('click', ()=> {
    result.innerText = result.innerText.slice(0, -1)
})

numArr.forEach((x) => {
    if(x != 'A/C'){
        x.addEventListener('click', addToDom)
    }
})

result.innerText = 0



function addToDom() {
    if(!(this.textContent == '=' || this.textContent === '+' || this.textContent === '-' || this.textContent === '÷' || this.textContent === '×')){
        // console.log(this.textContent)
        dom += this.textContent
        result.innerText = dom
    }else if (this.textContent === '+' || this.textContent === '-' || this.textContent === '÷' || this.textContent === '×') {
        first = dom
        operator = convertSign(this.textContent)
        dom = ''
        result.textContent = ''
        store.innerText += `${first}${this.textContent}`
    }else if(this.textContent === '='){
        store.textContent = ''
       result.textContent = operate(operator, first, dom)
       dom = result.textContent
       first = result.textContent
       console.log(`first ${first}`)
    }
}

const body = document.body

body.addEventListener('keypress', (e)=>{
    if(!(e.key == '=' || e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*')){
        result.innerText += e.key
        dom += e.key
    }else if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*') {
        first = dom
        operator = e.key
        console.log(e.key)
        dom = ''
        result.textContent = ''
        store.innerText += `${first}${convertOperator(e.key)}`
        console.log(first)
    }else if(e.key === '='){
        console.log(operate(operator, first, dom))
        store.textContent = ''
       result.textContent = operate(operator, first, dom)
       dom = ''
       first = ''
    }
})

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }
  
  function convertSign(buttons) {
    if (buttons === '÷') return '/'
    if (buttons === '×') return '*'
    if (buttons === '−') return '-'
    if (buttons === '+') return '+'
  }
  




ac.addEventListener('click', clear)

function clear() {
    dom = ''
    result.textContent = 0
    store.textContent = ''
    first = 0
}

const operate = function (operator, num1, num2){
    if(operator === '+'){
        return Number(num1) + Number(num2)
    }else if(operator === '-'){
        return Number(num1) - Number(num2)
    }else if(operator === '/'){
        return Number(num1) / Number(num2)
    }else if(operator === '*') {
        return Number(num1) * Number(num2)
    }else if(!operator) {
        console.log(operator)
        return `${num2}`
    }else {
        return 'Math Error'
    }
}