/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: harmindersinghnijjar
      Date:   1/14/2023

      Filename: project02-01.js
 */

function FahrenheitToCelsius(degree) {
  return (degree - 32) * 5/9;
}

function CelsiusToFahrenheit(degree) {
  return (degree * 9/5) + 32;
}
  
document.getElementById("fValue").onchange = function() {
  var fahrenheit = document.getElementById("fValue").value;
  var celsius = document.getElementById("cValue").value;
  if (fahrenheit !== "") {
    document.getElementById("cValue").value = FahrenheitToCelsius(fahrenheit);
  } else if (celsius !== "") {
    document.getElementById("fValue").value = CelsiusToFahrenheit(celsius);
    }
}

document.getElementById("cValue").onchange = function() {
  var fahrenheit = document.getElementById("fValue").value;
  var celsius = document.getElementById("cValue").value;
  if (celsius !== "") {
    document.getElementById("fValue").value = CelsiusToFahrenheit(celsius);
  } else if (fahrenheit !== "") {
    document.getElementById("cValue").value = FahrenheitToCelsius(fahrenheit);
    }

  
}
