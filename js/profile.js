function loadProfile(){


let user =

JSON.parse(

localStorage.getItem("nyroxhubUser")

);



if(!user){


window.location.href="login.html";

return;


}



let username =
document.querySelector("#profileName");


let avatar =
document.querySelector("#profileAvatar");



if(username){

username.innerHTML =
user.username;

}



if(avatar){

avatar.src =
user.avatar;

}



}



function changeAvatar(){


let url =

prompt(
"Տեղադրեք նկարի հղումը"
);



if(!url) return;



let user =

JSON.parse(

localStorage.getItem("nyroxhubUser")

);



user.avatar=url;



localStorage.setItem(

"nyroxhubUser",

JSON.stringify(user)

);



location.reload();


}



window.onload=function(){

loadProfile();

loadNews();

}
