const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

function pintar(elemento) {
    elemento.style.backgroundColor = "black";
}

div1.addEventListener("click", () => pintar(div1));
div2.addEventListener("click", () => pintar(div2));
div3.addEventListener("click", () => pintar(div3));
div4.addEventListener("click", () => pintar(div4));

let color;
const key = document.getElementById("key");

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'pink'
        key.style.backgroundColor = color;
    } else if (event.key === 's') {
        color = 'orange'
        key.style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = 'aqua'
        key.style.backgroundColor = color;
    }
})

const key2 = document.getElementById("key2");

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        color = 'blueviolet'
        key2.style.backgroundColor = color;
    } else if (event.key === 'w') {
        color = 'gray'
        key2.style.backgroundColor = color;
    } else if (event.key === 'e') {
        color = 'brown'
        key2.style.backgroundColor = color;
    }
})



