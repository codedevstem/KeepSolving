let possibleColors = ["blue","white","yellow","red"];
let possibleTexts = ["Abort","Detonate","Hold"];
let buttonColor = "";
let buttonText = "";
let stripeColor = "";
function fillInButton(solveSection) {
    let resetButton = document.createElement("input");
    resetButton.value = "Reset Module";
    resetButton.readOnly = true;
    resetButton.addEventListener("click", function () {resetButtonModule()}, false);
    solveSection.appendChild(resetButton);
    let textSection = document.createElement("section");
    textSection.id = "textSection";
    let textHeader = document.createElement("p");
    textHeader.innerHTML = "What does the button say?";
    textSection.appendChild(textHeader);
    possibleTexts.forEach(text => {
        let textChoice = document.createElement("input");
        textChoice.value = text;
        textChoice.readOnly = true;
        textChoice.addEventListener("click", function() {
            chooseElement("K" + text)
        },false);
        textChoice.id ="K" + text + "choice";
        textSection.appendChild(textChoice);
    });
    solveSection.appendChild(textSection);

    let colorSection = document.createElement("section");
    textSection.id = "colorSection";
    let colorHeader = document.createElement("p");
    colorHeader.innerHTML = "What color has the button?";
    colorSection.appendChild(colorHeader);
    possibleColors.forEach(color => {
        let colorChoice = document.createElement("input");
        colorChoice.style.backgroundColor = color;
        colorChoice.value = color;
        colorChoice.readOnly = true;
        colorChoice.addEventListener("click", function() {chooseElement("B" +color)},false);
        colorChoice.id = "B" + color + "choice";
        colorSection.appendChild(colorChoice);
    });
    solveSection.appendChild(colorSection);
    buttonColor = "";
    buttonText = "";
    stripeColor = "";
    
    
}
function resetButtonModule(){
    rootSection = document.getElementById("solvingSection");
    rootSection.innerHTML = "";
    buttonColor = "";
    buttonText = "";
    stripeColor = "";
    fillInButton(rootSection);
}
function chooseElement(id) {
    let currentElement = document.querySelector("#"+id+"choice");
    if(currentElement.id.startsWith("K")){
        clearTextInputs(currentElement);
    }else if (currentElement.id.startsWith("C")){
        clearColorInputs(currentElement);
    }else if (currentElement.id.startsWith("S")){
        clearColorInputs(currentElement);
    }
    storeValue(id);
    if(buttonColor != "" && buttonText != "" && stripeColor != ""){
        let explanation = document.getElementById("explanation");
        explanation.innerHTML = solveStripe()
    }else if (buttonColor != "" && buttonText != ""){
        console.log(document.getElementById("stripeSection"))
        if(document.getElementById("stripeSection") === null){
            let colorStripeSection = document.createElement("section");
            colorStripeSection.id = "stripeSection";
            let colorStripeHeader = document.createElement("p");
            colorStripeHeader.innerHTML = "What color has the stripe?";
            colorStripeSection.appendChild(colorStripeHeader);
            possibleColors.forEach(color => {
                let colorChoice = document.createElement("input");
                colorChoice.style.backgroundColor = color;
                colorChoice.value = color;
                colorChoice.readOnly = true;
                colorChoice.addEventListener("click", function() {chooseElement("S" + color)},false);
                colorChoice.id ="S" + color + "choice";
                colorStripeSection.appendChild(colorChoice);
            });
            let explanation = document.createElement("p");
            explanation.id = "explanation";
            explanation.innerHTML = solveButton();
            document.querySelector("#solvingSection").appendChild(colorStripeSection);
            document.querySelector("#solvingSection").appendChild(explanation);
        } else {
            let explanation = document.querySelector("#explanation");
            explanation.innerHTML = solveButton();
        }
    }
}
function clearTextInputs(currentElement) {
    let textInputs = Array.from(document.querySelectorAll("#textSection>input"));
    textInputs.forEach(textInput => {
        if(textInput != currentElement){
            textInput.classList.add("disbled");
            textInput.classList.remove("focused");
    } else {
            textInput.classList.remove("disabled");
            textInput.classList.add("focused");
        }
    });
}
function clearColorInputs(currentElement) {
    let textInputs = Array.from(document.querySelectorAll("#colorSection>input"));
    textInputs.forEach(textInput => {
        if(textInput != currentElement){
            textInput.classList.add("disbled");
            textInput.classList.remove("focused");
    } else {
            textInput.classList.remove("disabled");
            textInput.classList.add("focused");
        }
    });
}
function clearStripeInputs(currentElement) {
    let textInputs = Array.from(document.querySelectorAll("#stipeSection>input"));
    textInputs.forEach(textInput => {
        if(textInput != currentElement){
            textInput.classList.add("disbled");
            textInput.classList.remove("focused");
    } else {
            textInput.classList.remove("disabled");
            textInput.classList.add("focused");
        }
    });
}
function solveButton(){
    if(buttonText == "abort" && buttonColor == "blue"){
        return "Hold Down";
    } else if (numberOfBatteries > 1 && buttonText == "detonate"){
        return "Press and release";
    } else if (buttonColor == "white" && carFlag){
        return "Hold Down";
    } else if (numberOfBatteries > 2 && frkFlag){
        return "Press and release";
    } else if (buttonColor == "yellow"){
        return "Hold Down";
    } else if (buttonColor == "red" && buttonText == "hold"){
        return "Press and release";
    } else {
        return "Hold Down";
    }
}
function solveStripe(){
    if(stripeColor == "blue"){
        return "release when 4 in any position";
    }else if(stripeColor == "white"){
        return "release when 1 in any position";
    }else if(stripeColor == "yellow"){
        return "release when 5 in any position";
    }else{
        return "release when 1 in any position";
    }
}
function storeValue(id) {
    switch(id) {
        case "Bblue" : {
            buttonColor = "blue";
            break;
        }
        case "Bwhite" : {
            buttonColor = "white";
            break;
        }
        case "Byellow" : {
            buttonColor = "yellow";
            break;
        }
        case "Bred" : {
            buttonColor = "red";
            break;
        }
        case "KAbort" : {
            buttonText = "abort";
            break;
        }
        case "KDetonate" : {
            buttonText = "detonate";
            break;
        }
        case "KHold" : {
            buttonText = "hold";
            break;
        }
        case "Sblue" : {
            stripeColor = "blue";
            break;
        }
        case "Swhite" : {
            stripeColor = "white";
            break;
        }
        case "Syellow" : {
            stripeColor = "yellow";
            break;
        }
        case "Sred" : {
            stripeColor = "red";
            break;
        }
    }
}