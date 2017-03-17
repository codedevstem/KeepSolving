let numberOfBatteries;
let carIndicator = false;
function initBomb() {
    let batteriesSelector = document.querySelector("#batteriesSelector");
    batteriesSelector.addEventListener("change", function() {updateBatteries()}, false);
    let carIndicatorSelector = document.querySelector("#carIndicator");
    carIndicatorSelector.checked = false;
    carIndicatorSelector.addEventListener("click", function() {toggleCarIndicator()}, false);
    toggleCarIndicator();
}
function updateBatteries() {
    numberOfBatteries = document.querySelector("#batteriesSelector").value;
}
function toggleCarIndicator() {
    if(carIndicator){
        document.querySelector("#carLabel").classList.add("isTrue");
        document.querySelector("#carLabel").classList.remove("isFalse");
    }else {
        document.querySelector("#carLabel").classList.remove("isTrue");
        document.querySelector("#carLabel").classList.add("isFalse");
    }
    carIndicator = !carIndicator;
}

