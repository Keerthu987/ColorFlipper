const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    //rand num b/w 0-3
    const randomNumber= randNum();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})

function randNum(){
    return Math.floor(Math.random()*colors.length);
}