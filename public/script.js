
const messageButton = document.getElementById("messageButton");
const secretMessage = document.getElementById("secret");

messageButton.addEventListener("click", () => {

    secretMessage.hidden = !secretMessage.hidden;

    messageButton.textContent = secretMessage.hidden
        ? "আরেকটা কথা ❤️"
        : "ভালো থেকো ❤️";

});
