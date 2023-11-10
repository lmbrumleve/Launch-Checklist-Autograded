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


    formSubmission(document, faultyItems, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
    // alert("Form submission function ran.");
    
    event.preventDefault();

    });
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result});
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);

        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    // })
    
 });
 