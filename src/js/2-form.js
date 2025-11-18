let formData = { email: "", message: "" };

const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const  {email, message}  = formEl.elements;

const saveDate = JSON.parse (localStorage.getItem (STORAGE_KEY));


formEl.addEventListener("input", evt => {
    if(evt.target.name === "email") {
        formData.email = evt.target.value;
    }
    if(evt.target.name === "message") {
        formData.message = evt.target.value;
    }
    
    saveValue (STORAGE_KEY, formData);
});


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

    formData = { email: "", message: "" };
    formEl.reset();

});

const saveValue = (key, formData) => {
    try{
        localStorage.setItem (key, JSON.stringify (formData));
    }catch (error) {
        console.warn (error.message);
    }
};
