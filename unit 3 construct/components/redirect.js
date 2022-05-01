
    import {navbar,footer} from "./navbar.js"
    
    

   let header=document.getElementById("header")
   header.innerHTML=navbar();

   let foot=document.getElementById("foot")
   foot.innerHTML=footer();
   
   let men=document.getElementById("men")
men.addEventListener("click",function(){
    window.location.href="./men.html"
})

let women=document.getElementById("women")
women.addEventListener("click",function(){
    window.location.href="./women.html"
})

let kids=document.getElementById("kids")
kids.addEventListener("click",function(){
    window.location.href="./kids.html"
})

let beauty=document.getElementById("beauty")
beauty.addEventListener("click",function(){
    window.location.href="./beauty.html"
})

let home=document.getElementById("home")
home.addEventListener("click",function(){
    window.location.href="./index.html"
})

let offer=document.getElementById("offer")
offer.addEventListener("click",function(){
    window.location.href="./offer.html"
})

let login= document.querySelector(".fa-regular")
login.addEventListener("click",function(){
    window.location.href="./login.html"
})


