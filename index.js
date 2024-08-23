const display = document.getElementById('display')

function appendToDisplay(character){
    if (display.value == 'error')
        clearDisplay()
    console.log(character < '0')
    console.log(character > '9')
    if (character < '0' || character > '9'){
        if (display.value == '')
            return
        if (display.value.slice(-1) < '0' || display.value.slice(-1) > '9'){
            display.value = display.value.substring(0, display.value.length - 1) + character
            return
        }
}
    display.value += character
}

function clearDisplay (){
    display.value = ''
}

function calculate(){
    try{
        display.value = eval(display.value)
    } catch (error){
        display.value = 'error'
    }
}