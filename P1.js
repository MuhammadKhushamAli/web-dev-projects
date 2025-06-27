const body = document.querySelector('body');
const buttons = body.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) =>
    {
        body.setAttribute('backround-color',event.target.id);
    })
})
