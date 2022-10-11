// Given stored username and password and input username and password, Print if the user can login or not.

//database credentials
let dataBaseUserName="arun@gmail.com";
let dataBasePassWord="arun1234";

//user credentials
let userName="an@gmail.com";
let userPass="a123";

if(dataBaseUserName==userName){
  if(dataBasePassWord==userPass){
    console.log("User Logged In");
  }else{
    console.log("Wrong Password");
  }
}else{
   console.log("No User Found. Please register");
}