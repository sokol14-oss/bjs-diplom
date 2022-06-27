const { response } = require("express");

Use String;
const userForm = new UserForm();
userForm.loginFormCallback = (data) => {
    ApiConnector.login(data,callback);
    ApiConnector.login(data,response=>console.log(response));
if(response.succes =true){
    location.reload();
}
else{
    catch(e) {
        this.loginErrorMessageBox= "Неверный логин или пароль";
    }
}
}
userForm.registerFormCallback = (data)=>{
    ApiConnector.registerFormCallback(data,callback);
    location.reload();
}