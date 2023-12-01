let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navContainer .navSection .navLinks');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active'); 
} 

var btn=document.querySelector("#btn");
btn.onclick=function(){
    var li=document.createElement("li");
    li.setAttribute("id","list");
    li.innerHTML=generateit();
    document.getElementById("nav").appendChild(li);
    
}
function generateit()
{
    return 'contact';
}

var btn1=document.querySelector("#btn1");
btn1.onclick=function removeit(){
    list.parentNode.removeChild(list);
}


