let formData = { email: " ", message: " " };

const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const  {email, message}  = formEl.elements;

const saveDate = JSON.parse (localStorage.getItem (STORAGE_KEY));

if (saveDate) {
    if (typeof saveDate.email === 'string') {
    email.value = saveDate.email;
    formData.email = saveDate.email;
    }
    if (typeof saveDate.message === 'string') {
    message.value = saveDate.message;
    formData.message = saveDate.message;
    }
}

formEl.addEventListener("submit" ,evt => {
    evt.preventDefault();

    const values = {
        email: email.value.trim(),
        message: message.value.trim(),
    }

    if (!values.email || !values.message) {
        alert ("Please fill in all the fields!");
        return;
    }

    console.log (values);

    removeItem (STORAGE_KEY);
    formData = { email: " ", message: " " };
    formEl.reset();

});

const saveValue = (key, formData) => {
    try{
        localStorage.setItem (key, JSON.stringify (formData));
    }catch (error) {
        console.warn (error.message);
    }
};

const loadValue = key => {
    try {
        const serializedState = localStorage.getItem (key);
        return serializedState === null ? undefined : JSON.parse (serializedState);
    }
    catch (error) {
        console.warn (error.message);
    }
};

const removeItem = key => {
    localStorage.removeItem (key);
}

