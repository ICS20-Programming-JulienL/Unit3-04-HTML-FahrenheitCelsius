// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: April 3 2023
// This file contains the JS functions for index.html, Unit3-03-HTML-VolumeSphere

"use strict";

function calculateCelsiusTempature() {
  // get the radius from user input
  let fahrenheit= parseFloat(document.getElementById("tempature-fahrenheit").value)

  //calculate the volume 
  let celsius = 5/9*(fahrenheit-32)

  // display the volume 
  document.getElementById('answer1').innerHTML = "The tempature in degrees celsius " +celsius.toFixed(1)+"&degC";
}
