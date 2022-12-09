const mainElement = document.querySelector("main");
mainElement.classList.add("text-center", "py-5")

const Es = document.createElement("h1");
Es.classList.add("fw-bold", "text-danger", "mb-5");
Es.innerHTML = "Esercizio 1 - Conta Click";
mainElement.append(Es);

const button = document.createElement("button");
button.classList.add("mb-5")
mainElement.append(button);


let count = 0;
button.innerHTML = "#" + count;

button.addEventListener("click", function () {
    if (count < 9) {
        count++;
        newPAlert.innerHTML = "";

    } else if (count === 9) {
        count++;
        button.classList.add("bg-danger");
        setTimeout(limit, 5 * 1000);
        newPAlert.innerHTML = "attendi 5 secondi, quando il bottone non è più rosso puoi continuare";
        
    }
    button.innerHTML = "#" + count;
})
const newPAlert = document.createElement("p");
mainElement.append(newPAlert);


function limit() {
    count = 0;
    button.innerHTML = "#" + count;
    button.classList.remove("bg-danger")
}

const newEs = document.createElement("h1");
newEs.classList.add("fw-bold", "text-danger");
newEs.innerHTML = "Esercizio 2 - Cronometro";
mainElement.append(newEs);




//ESERCIZIO 2
let number = 0;
let clock;

// OUTPUT TIME
const outputTime = document.createElement("h1");
outputTime.innerHTML = number;
mainElement.append(outputTime);


//BOTTONE START
const buttonStart = document.createElement("a");
buttonStart.classList.add("btn", "bg-primary", "m-5");
buttonStart.innerHTML = "Start";
mainElement.append(buttonStart);

buttonStart.addEventListener("click", function () {
    clock = setInterval(myFunction, 1);
    outputTime.innerHTML = number;
    buttonStart.classList.add("d-none");

});


// BOTTONE STOP
const buttonStop = document.createElement("a");
buttonStop.classList.add("btn", "bg-danger", "m-5");
buttonStop.innerHTML = "Stoppa il tempo";
mainElement.append(buttonStop);

buttonStop.addEventListener("click", function () {
    console.log("stop al tempo")
    clearInterval(clock)
    outputTime.innerHTML = number;
    buttonStart.classList.remove("d-none");

})

// BOTTONE RESET
const buttonReset = document.createElement("a");
buttonReset.classList.add("btn", "btn-success", "m-5");
buttonReset.innerHTML = "Reset";
mainElement.append(buttonReset);

buttonReset.addEventListener("click", function () {
    number = 0;
    outputTime.innerHTML = number;
})


function myFunction() {
    number++;
    outputTime.innerHTML = number;
}