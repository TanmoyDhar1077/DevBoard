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

    // Get the current time
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    document.getElementById('updateDate').innerHTML =
        `<span class="text-[22px]">${day} ,</span><br>
         <span class="text-[22px] font-bold">${fullDate}</span>`;
        //  <span class="text-[22px] font-bold">${time}</span>
    // console.log(day);
    // console.log(fullDate);
    return time;
};

updateDateWeek();
setInterval(updateDateWeek, 1000);


// Attach event listeners to all "Completed" buttons
document.querySelectorAll('.completeBtn').forEach((button) => {
    button.addEventListener('click', taskComplete);
});


// Click Button to show Active log
function taskComplete(event) {
    alert('Wow! Your Completed This Task');

    /* ----- Disable button after click ----- */
    const completeBtn = event.target;
    completeBtn.disabled = true;

    /* ----- Change Task heading text after click ----- */
    const card = completeBtn.closest('.taskName');
    const taskTitle = card.querySelector('h2').innerText;

    /* ----- Show active log ----- */
    const activeLog = document.getElementById('activeLog');
    activeLog.innerHTML +=
        `<div class="p-2.5 m-6 bg-[#F4F7FF] rounded-2xl">
         <p>You have Complete ${taskTitle} at ${updateDateWeek()}</p>
        </div>`;

    /* ----- Decrease vlalue of active task ----- */
    const numDecrease = document.getElementById('numDecrease');
    numDecrease.innerHTML = parseInt(numDecrease.innerText
    ) - 1;

    /* -----  Increase vlalue of active task ----- */
    const numIncrease = document.getElementById('numIncrease');
    numIncrease.innerHTML = parseInt(numIncrease.innerText
    ) + 1;
};


function clearHistory() {
    const activeLog = document.getElementById('activeLog');
    activeLog.innerHTML = '';
};


