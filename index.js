const mainContainer = document.getElementById("main-container")
const equationField = document.getElementById("equation-field")
const solveButton = document.getElementById("solve-button")
const solutionDisplay = document.getElementById("solution-display")

solveButton.addEventListener("click", function() {
    solutionDisplay.innerHTML = ``
    const txt = equationField.value.replace(/\s/g, "")
    const oper = txt.match(/\D/g)
    const num = txt.split(/\D/g)
    var sol
    const arr = []
    
        for(i in oper) {
            arr.push(num[i], oper[i])
        }
        arr.push(num[num.length -1])
        console.log(arr)
        var n = parseInt(arr[0])

        for (i in arr) {
            if ((i % 2) != 0 ) {
  
                if(arr[i] === '+') {
        n = n + parseInt(arr[parseInt(i)+parseInt(1)])

    }
    else if(arr[i] === '-') {
        n = n - parseInt(arr[parseInt(i)+parseInt(1)])
    }
     else if(arr[i] === '*') {
        n = n * parseInt(arr[parseInt(i)+parseInt(1)])
    }
     else if(arr[i] === '/') {
        n = n / parseInt(arr[parseInt(i)+parseInt(1)])
    }
            }    
        }

const soldiv = document.createElement('div')  
soldiv.classList.add('equation-component')
solutionDisplay.appendChild(soldiv)
soldiv.innerHTML = n   
var cont = []
for (let i=0; i < arr.length; i++) {
    cont[i] = document.createElement('div');
    cont[i].classList.add('equation-component');
    solutionDisplay.appendChild(cont[i])
}
for (let i=0; i < arr.length; i++) {
    if (i % 2 == 0) {
       cont[i].style.background = 'green' 
       cont[i].innerHTML = arr[i]
    }
    else if (i % 2 != 0){
        cont[i].style.background = '#31a340'
        cont[i].innerHTML = arr[i]
    }
}
const eqdiv = document.createElement('div')

eqdiv.classList.add('equation-component')
solutionDisplay.appendChild(eqdiv)
eqdiv.style.background = '#7384d1'
eqdiv.innerHTML = "="
solutionDisplay.appendChild(soldiv)

    
