const body = document.querySelector('body');
const buttons = body.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) =>
    {
        body.setAttribute('style', `background-color: ${event.target.id}`);
    })
})
