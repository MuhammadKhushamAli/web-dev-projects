const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
event.preventDefault();

let height = parseFloat(form.querySelector('#height').value);
const weight = parseFloat(form.querySelector('#weight').value);

height = height * 0.3048 // Ft to Meter
const bmi = weight / (height * height);
let status;

if(bmi < 18.6)
{
    status = 'Under Weight';
}
else if(bmi >= 18.6 && bmi <= 24.9)
{
    status = 'Normal Rane';
}
else
{
    status = 'OverWeight';
}

const result = document.createElement('h3');
result.setAttribute('style', 'color: white; font-weight: bolder;');
result.appendChild(document.createTextNode(`Your BMI is ${bmi}
    You are ${status}`));
form.replaceWith(result);
})