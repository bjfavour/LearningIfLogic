const open = document.querySelector('.bi');
const visibility = document.querySelector('.dropdown');
const buttons = document.querySelectorAll('.getmessage'); 
const submit = document.querySelector('.submit');
let selectMessage = document.querySelector('.show');
let output = document.querySelector('.result');
const reset = document.querySelector('.reset')
let message;
let activity;

open.addEventListener('click', () => {
    visibility.style.display = "block";
});

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(item.textContent); 
        selectMessage.textContent = item.textContent;
        visibility.style.display = "none";
        activity = item.textContent.trim();
        console.log(activity)
         
        
    });
});


const calculate = () => {
    
    if (activity == "Get up") {
        message = "It is 6:30AM";
    } else if (activity == "Breakfast") {
        message = "It is 7:00AM";
    } else if (activity == "Drive to work") {
        message = "It is 8:00AM";
    } else if (activity == "Lunch") {
        message = "It is 12:00PM";
    } else if (activity == "Drive home") {
        message = "It is 5:00PM";
    } else if (activity == "Dinner") {
        message = "It is 6:30PM";
    } else {
        message = "No valid activity selected"; 
    }

    console.log(message); 
    output.textContent = message;
};

submit.addEventListener('click', () => {
    calculate(); 
});

reset.addEventListener('click', () => {
    window.location.reload();
})