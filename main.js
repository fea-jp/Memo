let initial_hight=window.innerHeight;
const assist_box=document.getElementById("assist");

window.addEventListener("resize",()=>{
    if(initial_hight>window.innerHeight){
        assist_box.style.display="block";
    }else {
        initial_hight=window.innerHeight;
        assist_box.style.display="none";
    }
});
