
const totalNumber = 9;
const totalOperators = 3;
const numberContainer = document.getElementById('btns');
const screen = document.getElementById('screen');
const backspace = document.getElementById('backspace');
const resolveButton = document.getElementById('resolve');
const operators = ['', '+', '-', '*']
let numbers = [];

for(let i = 1; i <= totalNumber; i++){
    buttonElement = document.createElement('button')
    buttonElement.innerHTML = i;
    buttonElement.addEventListener('click', function() {
       screen.innerHTML = `<p>${i}</p>`;
       if(numbers.length <= 2){
            numbers.push(i)
            screen.innerHTML = `<p>${numbers}</p>`.replaceAll(',', ' ')
       }else{
            screen.innerHTML = "<p style='font-size:16px; color:red;'>Solo puedes seleccionar 2 valores</p>"
            numbers = []
        }
    });
    numberContainer.appendChild(buttonElement)
}

for(let i = 1; i <= totalOperators; i++){
    operatorsElements = document.createElement('button');
    operatorsElements.innerHTML = `${operators[i]}`
    operatorsElements.addEventListener('click', function(){
        numbers.splice(1,0, operators[i])
        screen.innerHTML = `<p>${numbers}</p>`.replaceAll(',', ' ')
    })
    numberContainer.appendChild(operatorsElements)
}

backspace.addEventListener('click', function(){
    numbers.pop();
    screen.innerHTML = `<p>${numbers}</p>`.replaceAll(',', ' ')
})


resolveButton.addEventListener('click', function(){
    if(numbers[1] === '+'){
        result = numbers[0] + numbers[2]
        screen.innerHTML = `<p>${numbers[0]} ${numbers[1]} ${numbers[2]} = ${result}</p>`
        numbers = []
    }else if(numbers[1] === '-'){
        result = numbers[0] - numbers[2]
        screen.innerHTML = `<p>${numbers[0]} ${numbers[1]} ${numbers[2]} = ${result}</p>`
        numbers = []
    }else if(numbers[1] === '*'){
        result = numbers[0] * numbers[2]
        screen.innerHTML = `<p>${numbers[0]} ${numbers[1]} ${numbers[2]} = ${result}</p>`
        numbers = []
    }else{
        screen.innerHTML = `<p style="color:red; font-size:16px;">No es posible hacer la operación</p>`
    }
})