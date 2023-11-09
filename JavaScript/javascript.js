const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password')

form.addEventListener('submit' , e => {
    e.preventDefault();

    validateInputs();
});

const setError = (Element, message) => {
    const inputControl = Element.parentElement;
    const
     

}


const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue =password.value.trim(); 


    if(firstnameValue === '') {

    }
alert('firstname');
}; 