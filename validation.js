function ValidateForm(){
    var username= document.getElementById("username");
    var password= document.getElementById("password");
    var value=true;
    if(username.value.length==0){
        username.className="wrong-input";
        username.nextElementSibling.innerHTML="***Failed***";
        valid=false;
    }

    if(password.value.length<6){
        password.className="wrong-input";
        password.nextElementSibling.innerHTML="***Failed***";
        valid=false;
    }
    return valid;
}