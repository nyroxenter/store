function toggleMenu(){


    let menu =
    document.querySelector(".side-menu");



    if(menu.style.display==="block"){

        menu.style.display="none";

    }

    else{

        menu.style.display="block";

    }


}



function openCategory(page){


    let user =
    localStorage.getItem("nyroxhubUser");



    if(!user){


        alert(
        "Խնդրում ենք նախ գրանցվել կամ մուտք գործել"
        );


        window.location.href="../register.html";


        return;


    }



    window.location.href =
    "categories/"+page;


}
