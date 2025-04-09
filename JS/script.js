let age = document.querySelector('.ageinput')
const submit = document.querySelector('.submit')
const result = document.querySelector('.result')


let message;
let cost = 0;

submit.addEventListener('click', () => {
    let ageValue = parseInt(age.value);

    if (ageValue <= 3) {
        cost = 0;
        message = 'Under age, access is free';
    } else if (ageValue > 3 && ageValue < 12) {
        cost = 5;
        message ='You have to pay US$5 to be granted access';
    } else if (ageValue >= 12 && ageValue < 65) {
        cost = 10;
        message = 'Your access is US$10';
    } else if (ageValue >= 65) {
        cost = 7;
        message = 'Your access is US$7';
        
    }

    console.log(message);
    result.textContent = message
})


