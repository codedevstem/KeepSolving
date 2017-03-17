window.onload = function() {
 let listOfModules = document.querySelectorAll('.module');
 let moduleArray = Array.from(listOfModules);
 moduleArray.forEach(module => {
  module.addEventListener("click", function() {changeActiveModule(module)}, false);
 });
 initBomb();
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

