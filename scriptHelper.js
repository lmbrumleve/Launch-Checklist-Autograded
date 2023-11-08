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
        alert("Invalid input. Pilot name is a number.");
        // stop the form submission
        // event.preventDefault();    

    } else if (validateInput(copilot.value) === "Is a number.") {
        alert("Invalid input. Copilot name is a number.");
        // stop the form submission
        // event.preventDefault();    
    };

//Update Shuttle Requirements

    //Use template literals to update the <li> elements pilotStatus and copilotStatus to include the pilot & copilot names
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");

    pilotStatus.innerHTML = `${pilot.value} ready.`; // update the element with id=pilotStatus to include pilot's name
    copilotStatus.innerHTML = `${copilot.value} ready.`; //update the element with id=copilotStatus to include copilot's name

    if (fuelLevel.value < 10000) {
    //If fuelLevel < 10,000 L that is too low: 
    //1. Change faultyItems to "visible" with an updated fuelStatus to show there's not enough fuel.
        document.getElementById("faultyItems").setAttribute("style", "visibility: visible");
        const fuelStatus = document.getElementById("fuelStatus");
        fuelStatus.innerHTML = `Fuel level of ${fuelLevel.value} L is NOT high enough for launch.`

    //2. Change the text of <h2>, launchStatus, to "Shuttle not ready for launch."
        const launchStatus = document.getElementById("launchStatus")
        launchStatus.innerHTML = "Shuttle not ready for launch."
    
        //3. Change the color to red.
        launchStatus.setAttribute("style", "color: red");

    } else if (cargoMass.value > 10000) {
    //If cargoMass > 10,000 kg that is too large. 

        //1. Change the list to visible with updated categories (too much mass for take off)
        document.getElementById("faultyItems").setAttribute("style", "visibility: visible");
    
        const cargoStatus = document.getElementById("cargoStatus");
        cargoStatus.innerHTML = `Cargo mass of ${cargoMass.value} kg is too high for take off.`

        //2. Change the text of launchStatus to "Shuttle not ready for launch."
        launchStatus.innerHTML = "Shuttle not ready for launch."

        //3. Change the color to red.
        launchStatus.setAttribute("style", "color: red")
    
    } else {
    //If shuttle is ready to launch:
        
        //1. Change the text of launchStatus to green and display "Shuttle ready for launch."
        launchStatus.setAttribute("style", "color: green");
        launchStatus.innerHTML = "Shuttle ready for launch."

}
 }
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
// module.exports = {
//     addDestinationInfo: addDestinationInfo,
//     validateInput: validateInput,
//     formSubmission: formSubmission,
//     pickPlanet: pickPlanet,
//     myFetch: myFetch
// }
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;