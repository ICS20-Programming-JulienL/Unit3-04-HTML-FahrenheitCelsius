// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: April 3 2023
// This file contains the JS functions for index.html, Unit3-04-HTML-FahrenheitCelsius

"use strict";

function calculateCelsiuisTempature() {
  //Get the temperature in degrees Fahrenheit
  let fahrenheit= parseFloat(document.getElementById("fahrenheit-variable").value)

  //calculate the temperature in degrees Celsius
  let celsius = 5/9*(fahrenheit-32)

  // display results 
  document.getElementById('answer1').innerHTML = "The temperature in degrees celsius is " +celsius.toFixed(2)+"&degC";
}
