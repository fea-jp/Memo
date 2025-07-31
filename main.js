let initial_hight=window.innerHeight;

window.addEventListener("resize",()=>{
    if(initial_hight<window.innerHeight){
        alert("タッチキーボードを検出しました！")
    }else {
        initial_hight=window.innerHeight;
        alert("タッチキーボードがなくなりました！")
    }
});