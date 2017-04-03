let wiresSection;
function fillInSimpleWires(solveSection) {
    let resetButton = document.createElement("input");
    resetButton.value = "Reset Module";
    resetButton.readOnly = true;
    resetButton.addEventListener("click", function() {resetSimpleModule()}, false)
    solveSection.appendChild(resetButton);
    let wiresSection = document.createElement("section");
    wiresSection.id = "wireSection";
    let wireHeader = document.createElement("p");
    wireHeader.innerHTML = "How many wires are there?";
    wiresSection.appendChild(wireHeader);
    let wireChoiceForm = document.createElement("form");
    wireChoiceForm.id = "wireForm";
    for(let i = 3; i >= 6; i++){
        let numWiresChoice = document.createElement("input");
        numWiresChoice.type = "button";
        numWiresChoice.value = "i";
        
    }
}
