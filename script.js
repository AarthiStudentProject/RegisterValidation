const wrapper =document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

var emailArray =[];
var passwordArray=[];

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});


function login(){
    event.preventDefault();
    var email = document.getElementById("user_email").value;
    var password = document.getElementById("user_password").value;
    var i = emailArray.indexOf(email);
    if(emailArray.indexOf(email)==-1)
    {
        if (email == ""){
            alert("Email required.")
            return;
        }
        alert("Email does not exist.")
        return;
    }
    else if(passwordArray[i]!=password){
        if(password=""){
            alert("Password required.");
            return;
        }
        alert("Email does not exist.")
        return;
    }
    else{
        alert(email+" Login successfully Welcome");
        document.getElementById("user_email").value="";
        document.getElementById("user_password").value="";
    }
}

function register(){
    event.preventDefault();
    var username = document.getElementById("name").value;
    var email = document.getElementById("email_id").value;
    var password = document.getElementById("password_valid").value;
    if(email=="")
    {
        alert("Email required.");
    }
    else if (password == "")
    {
        alert("Password required.")
    }
    else if(emailArray.indexOf(email)==-1)
    {
        emailArray.push(email);
        passwordArray.push(password);
        alert(username + " Thanks for registration. \n Try to login now");

        document.getElementById("email_id").value="";
        document.getElementById("password_valid").value="";
        document.getElementById("name").value="";

    }
}

