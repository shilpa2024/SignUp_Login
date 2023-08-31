const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinbtn = document.getElementById('signinbtn');
const signupbtn = document.getElementById('signupbtn');

signupbtn.onclick = function(){
    title.innerHTML = "Sign Up" ;
    nameField.style.display = "block" ;
}

signinbtn.onclick = function(){
    title.innerHTML = "Login" ;
    nameField.style.display = "none" ;
}

