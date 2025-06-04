const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("fahrenheit");
const tocelsius = document.getElementById("celsius");
const result = document.getElementById("result")

let temp;

function convert()
{
    result.classList.remove("blink");
    
    // convert the value in its repected temp
    if(tofahrenheit.checked)
    {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(tocelsius.checked)
    {
        temp = Number(textbox.value);
        temp = (temp -32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    }
    else // incase nothing is selected warn user to select
    {
        result.textContent = "Select a unit";
        result.classList.add("blink");
    }
}