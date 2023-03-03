let cel = document.getElementById("celsius");
let fahr = document.getElementById("fahrenheit");

function celcius_to_fahrenheit() {
    let ans = (parseFloat(cel.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(ans.toFixed(2));
}

function fahrenheit_to_celcius() {
    let ans = (parseFloat(fahr.value) - 32) * 5 / 9;
    celsius.value = parseFloat(ans.toFixed(2));
    console.log(ans);
}