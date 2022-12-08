const mainElement = document.querySelector("main");
mainElement.classList.add("text-center", "py-5")

const button = document.createElement("button");
mainElement.append(button);



let count = 0;
button.innerHTML = "#" + count;

button.addEventListener("click", function () {
    if (count < 10) {
        count++;
        
    } else {
        button.classList.add("bg-danger");
        setTimeout(limit, 5 * 1000);
    }
    console.log(count)
    button.innerHTML = "#" + count;
})

function limit() {
    console.log("azzera");
    count = 0;
    button.innerHTML = "#" + count;
    button.classList.remove("bg-danger")
}