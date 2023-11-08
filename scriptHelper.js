// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === true) {
        return "Not a number."
    } else if (isNaN(testInput) === false) {
        return "Is a number."
    }
    
 }
 
 function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {

//Validate user input.

    if (pilot.value === "" || 
    copilot.value === "" ||
    fuelLevel.value === "" ||
    cargoMass.value === "") {
    alert("All fields are required!");
    // stop the form submission
    // event.preventDefault();    

} 
// else {
//     alert(`
//     Pilot Name: ${pilot.value}
//     Copilot Name: ${copilot.value}
//     Fuel Level: ${fuelLevel.value}
//     Cargo Mass: ${cargoMass.value}
//     `);
// }

    if (validateInput(pilot.value) === "Is a number.") {
        alert("Invalid input.");
        // stop the form submission
        // event.preventDefault();    

    } else if (validateInput(copilot.value) === "Is a number.") {
        alert("Invalid input.");
        // stop the form submission
        // event.preventDefault();    
    };

//Update Shuttle Requirements
    //Update <div> id=faultyItems if something is not ready for launch
    // const faultyItems = document.getElementById("faultyItems");
    // if ()
    // faultyItems.innerHTML =
    // `<ol>
    //     <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
    //     <li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
    //     <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
    //     <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
    // </ol>`

    //Use template literals to update the <li> elements pilotStatus and copilotStatus to include the pilot & copilot names
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");

    pilotStatus.innerHTML = `${pilot} ready.`; // update the element with id=pilotStatus to include pilot's name
    copilotStatus.innerHTML = `${copilot} ready.`; //update the element with id=copilotStatus to include copilot's name

    //If fuelLevel < 10,000 L that is too low: 
    //1. Change faultyItems to "visible" with an updated fuelStatus to show there's not enough fuel.
    //2. Change the text of <h2>, launchStatus, to "Shuttle not ready for launch."
    //3. Change the color to red.

    //If cargoMass > 10,000 kg that is too large. 
    //1. Change the list to visible with updated categories (too much mass for take off)
    //2. Change the text of launchStatus to "Shuttle not ready for launch."
    //3. Change the color to red.

    //If shuttle is ready to launch:
    //1. Change the text of launchStatus to green and display "Shuttle ready for launch."
}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;