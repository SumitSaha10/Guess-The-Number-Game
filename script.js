window.addEventListener("load",()=> {
    
    let computer = Math.round(Math.random()*100);
    let steps = 0;
    console.log(computer);
    let btn = document.getElementById("btn");
    let btn1 = document.getElementById("btn1");
    let messege = document.getElementById("messege");
    let img = document.getElementById("image");
    //Initializing game musics
    var backMusic = new Audio('background.mp3');
    var gameWinMusic = new Audio("gamewin.wav");
    var notMatchMusic = new Audio("notmatch.wav");
    var submitMusic = new Audio("submit.wav");
    

    btn.addEventListener("click",()=>{
        submitMusic.play();
        steps+=1;
        let user = parseInt(document.getElementById("userguess").value);
        if (user!=null) {
            if (user==computer) {
                messege.innerText="Congratulations number matched\nYou took "+steps+" steps";
                img.style.display = "block";
                gameWinMusic.play();
                backMusic.pause();
            } 
            else if (user>computer) {
                messege.innerText="Too bigger number";
                notMatchMusic.play();
            }
            else {
                messege.innerText="Too smaller number";
                notMatchMusic.play();
            }
        }
        
    })
    btn1.addEventListener("click",()=>{
        submitMusic.play();
        computer = Math.round(Math.random()*100);
        steps = 0;
        messege.innerText = "Nothing to show";
        let user = document.getElementById("userguess");
        user.value = "";
        img.style.display = "none";
    })
})