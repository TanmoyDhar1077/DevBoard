let changeTheme = document.getElementById('themeBtn');

function randomBackground() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
changeTheme.addEventListener('click', function(event) {
    event.preventDefault();
    document.body.style.backgroundColor = randomBackground();
});
