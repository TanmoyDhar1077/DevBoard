// Background color change
let changeTheme = document.getElementById('themeBtn');

function randomBackground() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
changeTheme.addEventListener('click', function (event) {
    event.preventDefault();
    document.body.style.backgroundColor = randomBackground();
});

// Date and Week Update
function updateDateWeek() {
    const now = new Date();

    // Get the day of the week
    const day = now.toLocaleDateString('en-US', { weekday: 'short' });

    // Get the full date
    const fullDate = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    document.getElementById('updateDate').innerHTML =
        `<span class="text-[22px]">${day} ,</span><br>
         <span class="text-[22px] font-bold">${fullDate}</span>`;
    // console.log(day);
    // console.log(fullDate);
};

updateDateWeek();

// Click Button to show Active log

