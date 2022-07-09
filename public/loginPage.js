"use strict";
const { response } = require("express");
const userForm = new UserForm();
userForm.loginFormCallback = (data) => {
    ApiConnector.login(data,(response)) => {
        if(response.succes =true){
            location.reload();
        }
        else{
            setLoginErrorMessage(message);
    }
}
}
userForm.registerFormCallback = (data)=> {
    ApiConnector.registerFormCallback(data,(response)) => {
        if(response.succes =true){
            location.reload();
        }
        else{
            setRegisterErrorMessage(message);
    }
}
    
}