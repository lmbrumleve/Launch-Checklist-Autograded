// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");


window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        // alert("Submit clicked.");
    
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    const faultyItems = document.getElementById("faultyItems");

    //Validate user input.

    if (validateInput(pilotNameInput) === "Empty" || 
    validateInput(copilotNameInput) === "Empty" ||
    validateInput(fuelLevelInput) === "Empty" ||
    validateInput(cargoMassInput) === "Epmty") {
    return alert("All fields are required!");

} 


    if (validateInput(pilotNameInput) === "Is a Number") {
        return alert("Invalid input. Pilot name is a number.");

    } else if (validateInput(copilotNameInput) === "Is a Number") {
        return alert("Invalid input. Copilot name is a number.");
    
    } else if (validateInput(fuelLevelInput) === "Not a Number") {
        return alert("Invalid input. Fuel level must be a number.");

    } else if (validateInput(cargoMassInput) === "Not a Number") {
        return alert("Invalid input. Cargo mass must be a number.")

    };

    formSubmission(document, faultyItems, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
    // alert("Form submission function ran.");
    
    event.preventDefault();

    });
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log("then " + listedPlanets);
    });
    // .then(function () {
        console.log("not then " + listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);

        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    // })
    
 });
 