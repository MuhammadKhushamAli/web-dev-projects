const url = 'https://api.github.com/users/MuhammadKhushamAli';
const xhr = new XMLHttpRequest();
let data = {};

xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        data = JSON.parse(this.responseText);
        console.log(data);

        const button = document.getElementById('fetchBtn');
        const image = document.getElementsByTagName('img');
        const name = document.querySelector('.card-title');
        const text = document.querySelector('.card-text');
        button.addEventListener('click', (event) => {
            button.remove();
            image[0].setAttribute('src', `${data.avatar_url}`);
            name.innerText = `${data.login}`;
            text.innerText = data.bio;
        })
    }
}

