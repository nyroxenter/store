function createNews(){


let title =
document.querySelector("#newsTitle").value;


let description =
document.querySelector("#newsDescription").value;



if(!title || !description){


alert("Լրացրեք բոլոր դաշտերը");

return;


}



let news = {


title:title,

description:description,

date:new Date().toLocaleDateString()


};



let oldNews =
JSON.parse(
localStorage.getItem("nyroxhubNews")
) || [];



oldNews.push(news);



localStorage.setItem(

"nyroxhubNews",

JSON.stringify(oldNews)

);



alert(
"Նորությունը ստեղծվեց"
);



location.reload();


}



function loadNews(){


let box =
document.querySelector(".news-container");



if(!box) return;



let news =

JSON.parse(

localStorage.getItem("nyroxhubNews")

) || [];



news.forEach(item=>{


box.innerHTML += `

<div class="card">

<h2>
${item.title}
</h2>


<p>
${item.description}
</p>


<small>
${item.date}
</small>


</div>

`;


});


}
