function registerUser(){

    let username =
    document.querySelector("#username").value;

    let email =
    document.querySelector("#email").value;

    let password =
    document.querySelector("#password").value;


    if(!username || !email || !password){

        alert("Խնդրում ենք լրացնել բոլոր դաշտերը");
        return;

    }


    let user = {

        username: username,
        email: email,
        password: password,
        avatar: "assets/avatar.png"

    };


    localStorage.setItem(
        "nyroxhubUser",
        JSON.stringify(user)
    );


    alert("Գրանցումը հաջողվեց");


    window.location.href="profile.html";

}



function loginUser(){


    let email =
    document.querySelector("#email").value;


    let password =
    document.querySelector("#password").value;



    let savedUser =
    JSON.parse(localStorage.getItem("nyroxhubUser"));



    if(savedUser && 
       savedUser.email === email &&
       savedUser.password === password){


        alert("Բարի գալուստ NyroxHub");


        window.location.href="profile.html";


    }

    else{


        alert("Սխալ տվյալներ");


    }


}



function logout(){


    localStorage.removeItem("nyroxhubUser");


    window.location.href="index.html";


}
