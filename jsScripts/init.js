let memoryDisplay = [];
let memoryPosition = [];
let memoryLabel = [];
let memoryStage = 0;
window.onload = function() {
 let listOfModules = document.querySelectorAll('.module');
 let moduleArray = Array.from(listOfModules);
 moduleArray.forEach(module => {
  module.addEventListener("click", function() {changeActiveModule(module)}, false);
 });
}

function changeActiveModule(module){
 let solveSection = document.querySelector('#solvingSection');
 solveSection.innerHTML = "";
 switch (module.id){
  case "Memory" : fillInMemory(solveSection);
  break;
  case "SimpleWires" : fillInSimpleWires(solveSection);
  break;  
  case "Button" : fillInButton(solveSection);
  break;  
 }
}

function fillInMemory(solveSection) {
 let resetButton = document.createElement("input");
 resetButton.value = "Reset Module";

 solveSection.appendChild(resetButton);
 generateInputFields(solveSection, "Display");
 generateInputFields(solveSection, "Position");
 generateInputFields(solveSection, "Label");
 let explanation = document.createElement("p");
 explanation.id = "explanation";
 solveSection.appendChild(explanation);
}
function generateInputFields(parent, type) {
 let choices = [1,2,3,4];
 let inputSection = document.createElement("section");
 inputSection.id = type;
 let inputLabel = document.createElement("p");
 inputLabel.innerHTML = type;
 inputSection.appendChild(inputLabel);
 choices.forEach(choice => {
  let numberChoice = document.createElement("input");
  numberChoice.addEventListener("click", function() {setValue(type, choice)}, false);
  numberChoice.classList.add(type + choice);
  numberChoice.value = choice;
  inputSection.appendChild(numberChoice);
 });
 parent.appendChild(inputSection);
}

function setValue(type, choice){
 if(!document.querySelector("." + type + choice).classList.contains("disabledInput")){
  let currentInputs =  Array.from(document.querySelectorAll("#" + type + ">input"));
  currentInputs.forEach(input => {
     if(input.classList.contains(type + choice)){
      input.classList.add("focused");
     }else {
      input.disabled = true;
      input.classList.add("disabledInput");
     }
  });

  if(type == "Display"){
   memoryDisplay.push(choice);
  } else if(type == "Position"){
   memoryPosition.push(choice);
  } else if(type == "Label"){
   memoryLabel.push(choice);
  }
   showExplanation();
   if(memoryDisplay[memoryStage] != null && memoryPosition[memoryStage] != null && memoryLabel[memoryStage] != null) {
    memoryStage++;
    resetInputs();
   }
   if(memoryStage == 5){
    let allInputs = Array.from(document.querySelectorAll("#solvingSection>section>input"));
    allInputs.forEach(input => {
     input.disabled = true;
     input.classList.add("disabledInput");
    });
   }
 }
}
function resetInputs(){
 let allInputs = Array.from(document.querySelectorAll("#solvingSection>section>input"));
 allInputs.forEach(input => {
  input.disabled = false;
  input.classList.remove("disabledInput");
  input.classList.remove("focused");
 });
}
function showExplanation() {
 let message = document.querySelector("#explanation");
 message.innerHTML = "Stage " + parseInt(memoryStage+1) + ": " + solveStep();
}

function solveStep() {
 switch(memoryStage){
  case 0 : {
   switch(memoryDisplay[memoryStage]){
    case 1 : return "Press the button in position 2";
    case 2 : return "Press the button in position 2";
    case 3 : return "Press the button in position 3";
    case 4 : return "Press the button in position 4";
   }
  }
  break;
  case 1 : {
   switch(memoryDisplay[memoryStage]){
    case 1 : return "Press the button with label 4";
    case 2 : return "Press the button in position " + memoryPosition[0];
    case 3 : return "Press the button in position 1";
    case 4 : return "Press the button in position " + memoryPosition[0];
   }
  }
  break;
  case 2 : {
   switch(memoryDisplay[memoryStage]){
    case 1 : return "Press the button with label " + memoryLabel[1];
    case 2 : return "Press the button with label " + memoryLabel[0];
    case 3 : return "Press the button in position 3";
    case 4 : return "Press the button with label 4";
   }
  }
  break;
  case 3 : {
   switch(memoryDisplay[memoryStage]){
    case 1 : return "Press the button in position " + memoryPosition[0];
    case 2 : return "Press the button in position 1";
    case 3 : return "Press the button in position " + memoryPosition[1];
    case 4 : return "Press the button in position " + memoryPosition[1];
   }
  }
  break;
  case 4 : {
   switch(memoryDisplay[memoryStage]){
    case 1 : return "Press the button with label " + memoryLabel[0];
    case 2 : return "Press the button with label " + memoryLabel[1];
    case 3 : return "Press the button with label " + memoryLabel[3];
    case 4 : return "Press the button with label " + memoryLabel[2];
   }
  }
 }
}
function fillInSimpleWires(solvSection) {
 console.log("SimpleWire");
}

function fillInButton(solvSection) {
 console.log("Button");
}