let uscore=0;
let cscore=0;

let choice= document.querySelectorAll(".s1");
let c=document.querySelector("#com");
let u=document.querySelector("#user");
let m=document.querySelector(".msg");

const draw=()=>{
    console.log("game was draw")
    m.innerText="it was a draw"
    m.style.backgroundColor="purple"
}

const showwinner=(userwin,comchoice,userchoice)=>{

    if (userwin){
        uscore++;
        u.innerText=uscore;
        m.innerText=`you have won ${userchoice} beats ${comchoice}`
        m.style.backgroundColor="green";
    }
    else{
        cscore++;
        c.innerText=cscore;
        m.innerText=`you have lost ${comchoice} beats ${userchoice}` ;
        m.style.backgroundColor="red";
    }
}
const winner=(comchoice,userchoice)=>{
    if(comchoice==userchoice){
        draw()
    }
    
    else{let n=10
        let userwin=true;
        if (n>=5&&userchoice==="rock"){
            userwin=comchoice==="paper"? false:true;
        }else if(userchoice==="paper") {
            userwin=comchoice==="sicssors"? false:true;}
            else{
            userwin=comchoice==="rock"? false:true;
        }
        showwinner(userwin,comchoice,userchoice)
    }
}

const compchoice=()=>{
    const options=["rock","paper","scissors"]
    const m = Math.floor(Math.random()*3)
    console.log("compchoice",m);
    return options[m]
   
}

const playgame=(userchoice)=>{ console.log("userchoice",userchoice)
    const comchoice=compchoice()
    console.log(comchoice)
    winner(comchoice,userchoice)
   
}

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice)
        playgame(userchoice);
    })
})