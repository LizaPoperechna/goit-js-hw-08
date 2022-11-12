import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
}

const FEEDBACK_KEY = "feedback-form-state";


refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);



function onFormSubmit(e) {
    e.preventDefault();

    console.log("Отправляем форму");

    e.currentTarget.reset();
    
    localStorage.removeItem(FEEDBACK_KEY);
};


function onFormInput(evt) {

    const formData = {
        email: refs.email.value,
        message: refs.message.value,  
    };
    console.log(formData);

    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function updateLocalStorageData() {
    const savedMessage = localStorage.getItem(FEEDBACK_KEY);

    if (savedMessage) {
        const currentData = JSON.parse(savedMessage);
        refs.email.value = currentData.email;
        refs.message.value = currentData.message;
    };
}

updateLocalStorageData();















