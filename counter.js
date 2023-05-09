const btn=document.querySelector(".btn");
let counter=0;

btn.addEventListener("click", ()=>{
    counter++;
    document.querySelector(".count").innerHTML=counter;
});


function start(){
    counter=0;
    document.querySelector(".count").innerHTML=counter;
}