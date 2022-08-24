const evil = (fn) => {
    return new Function("return " + fn)();
};
  
// console.log(evil("(12 / 5) * 9 + 9.4 * 2"));
let dom = ''
const equal = document.querySelector('.equal')
const result = document.querySelector('#result')
const num = document.querySelectorAll('.num')
const ac = document.querySelector('.AC')
const numArr = [...num]
numArr.forEach((x) => {
    if(x != 'A/C'){
        x.addEventListener('click', addToDom)
    }
})

ac.addEventListener('click', clear)

function clear() {
    dom = ''
    result.textContent = ''
}

function addToDom(e) {
    if(e.target.textContent != '='){
        result.innerText += e.target.textContent
        dom += e.target.textContent
        console.log(dom)
    }
    
}
equal.addEventListener('click', equalto)

function equalto() {
    result.innerText = evil(dom)
}
// console.log