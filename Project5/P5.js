const body = document.querySelector('body');
const start = body.querySelector('#start');
const stop = body.querySelector('#stop');

// It generates a random color
function randomColorGenerator() {
    const hexString = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hexString[(Math.round(Math.random() * 15))];
    }
    return color;
}


// Start Button Event Handeled
let interval = null;
start.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            body.setAttribute('style', `background-color: ${randomColorGenerator()}`);
        }, 1000);
    }
});

// Stop Button Event Handler
stop.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
})