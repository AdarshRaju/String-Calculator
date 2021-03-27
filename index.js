const mainContainer = document.getElementById("main-container")
const equationField = document.getElementById("equation-field")
const solveButton = document.getElementById("solve-button")
const solutionDisplay = document.getElementById("solution-display")

solveButton.addEventListener("click", function() {
    // Clears the solution contents on each click
    solutionDisplay.innerHTML = ``
    
    // Write your code here 👇
    const txt = equationField.value.replace(/\s/g, "")
    const oper = txt.match(/\D/g)
    const num = txt.split(/\D/g)
    var sol
    // const eqn = equationField.value.split(' ')
    console.log(num)
    console.log(oper)
    const arr = []
    
        for(i in oper) {
            // console.log(num[j], oper[j], num[(parseInt(j)+ parseInt(1))])
            // console.log(num[j], oper[j])
            arr.push(num[i], oper[i])
        }
        arr.push(num[num.length -1])
        console.log(arr)
        var n = parseInt(arr[0])
//    console.log(n)
            // console.log(j, parseInt(j)+ parseInt(1), j+1)
        for (i in arr) {
            if ((i % 2) != 0 ) {
                // console.log(parseInt(i)+parseInt(1))
                // console.log(arr[i])
                if(arr[i] === '+') {
        n = n + parseInt(arr[parseInt(i)+parseInt(1)])
        // console.log((arr[i+1]))
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
console.log(n)
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
console.log(cont)
    // if(eqn[1] === '+') {
    //     sol = parseInt(eqn[0]) + parseInt(eqn[2]) 
    // }
    // else if(eqn[1] === '-') {
    //      sol = parseInt(eqn[0]) - parseInt(eqn[2]) 
    // }
    //  else if(eqn[1] === '*') {
    //      sol = parseInt(eqn[0]) * parseInt(eqn[2]) 
    // }
    //  else if(eqn[1] === '/') {
    //      sol = parseInt(eqn[0]) / parseInt(eqn[2]) 
    // }
    // const soldiv = document.createElement('div')
    // const e1div = document.createElement('div')
    // const opdiv = document.createElement('div')
    // const e2div = document.createElement('div')
    // const eqdiv = document.createElement('div')
    // soldiv.classList.add('equation-component')
    // e1div.classList.add('equation-component')
    // opdiv.classList.add('equation-component')
    // e2div.classList.add('equation-component')
    // eqdiv.classList.add('equation-component')
    // solutionDisplay.appendChild(e1div)
    // solutionDisplay.appendChild(opdiv)
    // solutionDisplay.appendChild(e2div) 
    // solutionDisplay.appendChild(eqdiv)
    // solutionDisplay.appendChild(soldiv)
    // soldiv.style.background = 'orange'
    // opdiv.style.background = 'lightgreen'
    // eqdiv.style.background = 'lightblue'
    // soldiv.innerHTML = sol
    // e1div.innerHTML = eqn[0]
    // opdiv.innerHTML = eqn[1]
    // e2div.innerHTML = eqn[2]
    // eqdiv.innerHTML = "="
    
    
})
