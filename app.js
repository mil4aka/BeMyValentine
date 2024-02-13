window.onload = function () {
    const redBtn = document.querySelector("button.red-button").addEventListener("click", clickRed);
    const greenBtn = document.querySelector("button.green-button").addEventListener("click", clickGreen);

    let counter = 1;

    function clickRed(ev) {
        const red = ev.target;
        const green = ev.target.parentElement.children[0];

        switch (counter) {
            case 1: red.textContent = "Are you sure";
                break;
            case 5: red.textContent = "Are you really sure";
                break;
            case 9: red.textContent = "Do you want some time to think about it";
                break;
            case 13: red.textContent = "Come on, it'll be fun";
                break;
            case 17: red.textContent = "Please";
                break;
            case 21: red.textContent = "Pretty please";
                break;
            case 25: red.textContent = "Pleeeeaaaaseeee";
                break;
            case 29: red.textContent = "I promise you wont regret it";
                break;
            case 33: red.textContent = "I'll even buy you ice cream";
                break;
            case 37: red.textContent = "Dont leave me, I beg you";
                break;
            case 41: red.textContent = "Noooo";
                break;
            case 45: red.style.display = "none";
                document.body.removeChild(document.querySelector("body > h1"));
                green.style.fontSize = 250 + "px";
                break;
        }
        green.style.fontSize = counter * 15 + "px";
        counter += 4;
    }

    function clickGreen() {
        const h1 = document.createElement("h1");
        document.body.textContent = "";

        h1.textContent = "YAY!! I'll come pick you up at 21:30 😍"
        document.body.appendChild(h1);
    
    }
}