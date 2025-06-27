const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let height = parseFloat(form.querySelector('#height').value);
    const weight = parseFloat(form.querySelector('#weight').value);

    const result = document.createElement('h3');
    result.setAttribute('style', 'color: white');

    // Error Check
    if (height === '' || height <= 0 || isNaN(height)) {
        result.appendChild(document.createTextNode(`Invalid Input in Height`));
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.appendChild(document.createTextNode(`Invalid Input in Weight`));
    }
    else {
        height = height * 0.3048 // Ft to Meter
        const bmi = weight / (height * height).toFixed(2);

        let status;
        if (bmi < 18.6) {
            status = 'Under Weight';
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            status = 'Normal Rane';
        }
        else {
            status = 'OverWeight';
        }

        result.appendChild(document.createTextNode(`Your BMI is ${bmi}
    You are ${status}`));
    }
    form.replaceWith(result);
})