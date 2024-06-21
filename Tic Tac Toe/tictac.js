//dark mode or light mode 
let btn=document.querySelector("#mode");
let now ="light";
let body =document.querySelector("body");


btn.addEventListener("click",()=>{
if(now ==="light"){
    now ="dark"
        body.classList.remove("dark");
        body.classList.add("light");
    }
    else{
        now="light";
        body.classList.remove("light");
        body.classList.add("dark");
    }

console.log(now);
});
//winning patten 0,1,2 //3,4,5 //6,7,8,//0,3,6 //1,4,7 //2,5,8
//0,4,8 //2,4,6
let boxes =document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset");
let newBtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-W");
let msg =document.querySelector("#W");




let turnO =true;//x,y
 const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ];




 const resetGame =() =>{
    turnO =true;
    enableboxes();
    msgContainer.classList.add("hide");
 }
 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("box was clicked")
        if (turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
 });

const disableboxes =() =>
    {
        for (let box of boxes )
            {
                box.disabled=true;
            }
    };
    const enableboxes =() =>
        {
            for (let box of boxes )
                {
                    box.disabled=false;
                    box.innerText="";
                }
        };
    



const showWinner=(winner) =>{
    msg.innerText=`And the winner is ${winner}`;//error
    msgContainer.classList.remove("hide");
    disableboxes();
}



 const  checkWinner = () => {
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
        if( pos1val !=""&&  pos2val !="" &&  pos3val !=""){
            if (pos1val === pos2val && pos2val===pos3val){
            //console.log("winner",pos1val);
            showWinner(pos1val);
        }
        }
    }
 };
newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
