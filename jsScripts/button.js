function fillInButton(solveSection) {
    let resetButton = document.createElement("input");
    resetButton.value = "Reset Module";
    resetButton.addEventListener("click", function () {resetModule()}, false)
    solveSection.appendChild(resetButton);
}