
const display = document.getElementById("display");

function AppendToDisplay(input) {
  
        display.value += input;
}

function Calculate() {
    try{
        display.value = eval(display.value)        
    }
    catch(error) {
        display.value = "Error!"
    }

}

function Clear() {
    display.value = ""
}