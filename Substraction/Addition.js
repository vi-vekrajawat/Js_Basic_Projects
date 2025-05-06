const data = document.getElementById('btn')
data.addEventListener('click',()=>{
const firstNumber = document.getElementById('frst')
const input1 = Number(firstNumber.value)
const secondNumber  = document.getElementById('scnd')
const input2 = Number(secondNumber.value)
// const rslt = document.querySelector('p')
const r = input1-input2
const rslt = document.getElementById("para")
rslt.innerHTML = "Result : "+r
})