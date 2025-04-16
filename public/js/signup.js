
function formValidate(){
    const fullname = document.getElementById('fullname').value
    const email = document.getElementById('email').value
    const branch = document.getElementById('branch').value
    const role = document.getElementById('role').value
    const password = document.getElementById('password').value
    
    nameErrorMessage.textContent = '';
    emailErrorMessage.textContent = '';
    roleErrorMessage.textContent = '';
    branchErrorMessage.textContent = '';
    passwardErrorMessage.textContent = '';

    let isValid = true;
    if (fullname === "" || /\d/.test(fullname)) {
        nameErrorMessage.textContent = "Please enter your name properly.";
        isValid = false;
    }
    //! means not
    if (email && !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailErrorMessage.textContent =" enter a valid email address name@gamil.com!";
        isValid = false;
    }
    if (password === "" || password.length < 6) {
        passwardErrorMessage.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    }
    if ( branch === ''){
        branchErrorMessage.textContent = "please select branch"
        isValid = false;
    }
    if ( role === ''){
        roleErrorMessage.textContent = "please select your role to procceed"
        isValid = false;
    }
    if (isValid){
        alert('form submitted successfully')
        return true;
    }else{
        return false;
    }
                     
}
