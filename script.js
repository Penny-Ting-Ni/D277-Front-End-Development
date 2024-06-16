

function checkemail(){
    var email = document.getElementById("emailAddr").value;
    var confirm = document.getElementById("confirmEmail").value;

    if(email == confirm){
        document.getElementById("message").innerHTML= "<br><font color = 'green'>Email addresses match. Thank you!</font>"
        document.getElementById("submit") = false;
    }else {
        document.getElementById("message").innerHTML= "<br><font color = 'red'>Email addresses do not match. Please try again.</font>"
        document.getElementById("message") = true;

    }

}

