// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    let planet = pickPlanet(listedPlanets);

    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);

    })
// Starter Code:
    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    // })
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        // alert("Submit clicked.");

    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let faultyItems = document.getElementById("faultyItems");
    event.preventDefault();

        //Validate user input.
console.log(pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
        if (validateInput(pilotNameInput.value) === "Empty" || 
        validateInput(copilotNameInput.value) === "Empty" ||
        validateInput(fuelLevelInput.value) === "Empty" ||
        validateInput(cargoMassInput.value) === "Empty") {
        return alert("All fields are required!");
    
    } 
    
    
        if (validateInput(pilotNameInput.value) === "Is a Number") {
            return alert("Invalid input. Pilot name is a number.");
    
        } else if (validateInput(copilotNameInput.value) === "Is a Number") {
            return alert("Invalid input. Copilot name is a number.");
        
        } else if (validateInput(fuelLevelInput.value) === "Not a Number") {
            return alert("Invalid input. Fuel level must be a number.");
    
        } else if (validateInput(cargoMassInput.value) === "Not a Number") {
            return alert("Invalid input. Cargo mass must be a number.")
    
        };

    formSubmission(document, faultyItems, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
    // alert("Form submission function ran.");

    });
    
 });
 