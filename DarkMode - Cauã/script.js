/* const btn = document.querySelector("#btn")

function darkMode() {
    const body = document.querySelector("body")
    body.classList.toggle("dark-mode")
}

btn.addEventListener("click", darkMode) */

const button = document.getElementById("btn")
const body = document.body;

button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        button.textContent = "Desativar"
    } else {
        button.textContent = "Ativar"
    }
});