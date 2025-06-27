const clock = document.querySelector('.clock');
let date;
setInterval(() => {
    date = new Date();
    clock.innerHTML = `<h5>${date.toLocaleTimeString()}</h5>`;
}, 1000);