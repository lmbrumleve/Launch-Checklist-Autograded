// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML =

    // Here is the HTML formatting for our mission target div.
    
         `<h2>Mission Destination</h2>
             <ol>
                 <li>Name: ${name}</li>
                 <li>Diameter: ${diameter}</li>
                 <li>Star: ${star}</li>
                 <li>Distance from Earth: ${distance} </li>
                 <li>Number of Moons: ${moons}</li>
             </ol>
             <img src="${imageUrl}">`
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === true) {
        return "Not a Number"
    } else if (isNaN(testInput) === false) {
        return "Is a Number"
    }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

//Validate user input.

    if (validateInput(pilot.value) === "Empty" || 
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoMass.value) === "Epmty") {
    return alert("All fields are required!");

} 
// else {
//     alert(`
//     Pilot Name: ${pilot.value}
//     Copilot Name: ${copilot.value}
//     Fuel Level: ${fuelLevel.value}
//     Cargo Mass: ${cargoMass.value}
//     `);
// }

    if (validateInput(pilot.value) === "Is a Number") {
        return alert("Invalid input. Pilot name is a number.");

    } else if (validateInput(copilot.value) === "Is a Number") {
        return alert("Invalid input. Copilot name is a number.");
    
    } else if (validateInput(fuelLevel.value) === "Not a Number") {
        return alert("Invalid input. Fuel level must be a number.");

    } else if (validateInput(cargoMass.value) === "Not a Number") {
        return alert("Invalid input. Cargo mass must be a number.")

    };

//Update Shuttle Requirements

    //Use template literals to update the <li> elements pilotStatus and copilotStatus to include the pilot & copilot names
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");

    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`; // update the element with id=pilotStatus to include pilot's name
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`; //update the element with id=copilotStatus to include copilot's name

    const launchStatus = document.getElementById("launchStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const fuelStatus = document.getElementById("fuelStatus");


    if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
    //If shuttle is ready to launch:
        
        //1. Change the text of launchStatus to green and display "Shuttle ready for launch."
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is Ready for Launch."
        launchStatus.style.color = "green";
        return;

    } else if (fuelLevel.value < 10000 && cargoMass.value <= 10000) {
    //If fuelLevel < 10,000 L that is too low: 
    
    //1. Change faultyItems to "visible" with an updated fuelStatus to show there's not enough fuel.
        fuelStatus.innerHTML = `Fuel level too low for launch`

    //2. Change the text of <h2>, launchStatus, to "Shuttle not ready for launch."
        launchStatus.innerHTML = "Shuttle Not Ready or Launch"
        list.style.visibility = "visible";

        //3. Change the color to red.
        // launchStatus.style.color = 'red';
        launchStatus.setAttribute("style", "color:red;");
        return;

    } else if (fuelLevel.value >= 10000 && cargoMass.value > 10000) {
    //If cargoMass > 10,000 kg that is too large. 

        //1. Change the list to visible with updated categories (too much mass for take off)
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`
        list.style.visibility = "visible";

        //2. Change the text of launchStatus to "Shuttle not ready for launch."
        launchStatus.innerHTML = "Shuttle Not Ready for Launch."

        //3. Change the color to red.
        launchStatus.style.color = "red";
        return;
    
    } else if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
    //If fuelLevel < 10,000 L AND cargoMass > 10,000 kg update both fuel status and cargo status.
        list.style.visibility = "visible";
        fuelStatus.innerHTML = `Fuel level too low for launch`
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`
        launchStatus.innerHTML = "Shuttle Not Ready for Launch."
        launchStatus.style.color = "red";
        return;     

}
// list.style.visibility = "visible";

}

 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
           response.json().then(function(json) {
            return json;
           });
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomPlanetIndex = Math.floor(Math.random()*planets.length);
    return randomPlanetIndex;
 }
 

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;