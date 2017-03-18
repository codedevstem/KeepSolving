let numberOfBatteries;
let carFlag = false;
let frkFlag = false;
let paralellPortFlag = false;
let lastDigitFlag = false;
function initBomb() {
    let batteriesSelector = document.querySelector("#batteriesSelector");
    batteriesSelector.addEventListener("change", function() {updateBatteries()}, false);
    let indicators = Array.from(document.querySelectorAll("#booleanProperties>input"));
    indicators.forEach(indicator =>{
        indicator.checked = false;
        indicator.addEventListener("click", function() {toggleIndicator(indicator.id)}, false);
        toggleIndicator(indicator.id);
    });
}
function updateBatteries() {
    numberOfBatteries = document.querySelector("#batteriesSelector").value;
}
function toggleIndicator(labelId) {
    let indicator = document.querySelector("#" + labelId + "Label");
    if(labelId == "car"){
        solveFlagStatus(carFlag, indicator);
        carFlag = !carFlag;
    } else if (labelId == "frk"){
        solveFlagStatus(frkFlag, indicator);
        frkFlag = !frkFlag;
    } else if (labelId == "lastDigit"){
        solveFlagStatus(paralellPortFlag, indicator);
        paralellPortFlag = !paralellPortFlag;
    } else if (labelId == "paralellPort") {
        solveFlagStatus(lastDigitFlag, indicator);
        lastDigitFlag = !lastDigitFlag;
    }
}
function solveFlagStatus(flag, node){
    if(flag){
        node.classList.add("isTrue");
        node.classList.remove("isFalse");
    }else {
        node.classList.remove("isTrue");
        node.classList.add("isFalse");
    }
} 

