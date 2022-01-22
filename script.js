function startGame(){
function boom(l){
const m=document.getElementById(`boom${l}`);
var myVar = setInterval(spostaDiv, 20);
	var margin = 0;
	let h = 700;
	function spostaDiv() {
		if (margin == h) {
        m.style.marginTop = 10 + "px";
        return;
		} else {
		m.style.marginTop = margin + "px";
        margin += 10;
        margin=margin%700;
		}
        if(margin===520)
        {
            if(Number(localStorage.getItem('value'))===l)
            {
              location.href="endgame.html";
            }
            let t=Number(localStorage.getItem('score'));
            t++;
            localStorage.setItem('score',String(t));
        }
	}
}

let l1=Math.floor(Math.random()*10);
if(l1!=0)
{
boom(l1);}
let l2=Math.floor(Math.random()*10);
if(l2!=0)
{
boom(l2);}
let l3=Math.floor(Math.random()*10);
if(l3!=0)
{
boom(l3);}
let l4=Math.floor(Math.random()*10);
if(l4!=0)
{
boom(l4);}
}
function start(){
    setInterval(() => {
        document.location.reload();
    }, 1300);
startGame();
}
start();
    ctrl(Number(localStorage.getItem('value')));
      function ctrl(v){
const t=document.getElementById(`ship${v}`);
t.style.opacity=1;
}
function ctrx(v){
 
    const t=document.getElementById(`ship${v}`);
    t.style.opacity=0;
    }
    const eve=document.getElementById("rrr");
    eve.addEventListener('keypress',()=>{  
        ke= event.key;
        if(ke==="d")
        {
            if(Number(localStorage.getItem('value'))===10)
            {
                ctrx(Number(localStorage.getItem('value')));
                localStorage.setItem('value',String(1));
            }
            else
            {
                ctrx(Number(localStorage.getItem('value')));
                let t=Number(localStorage.getItem('value'));
                t++;
                localStorage.setItem('value',String(t));
            }
        }  
        if(ke==="a")
        {
            if(Number(localStorage.getItem('value'))===1)
            {
                ctrx(Number(localStorage.getItem('value')));
                localStorage.setItem('value',String(10));
            }
            else
            {
                ctrx(Number(localStorage.getItem('value')));
                let t=Number(localStorage.getItem('value'));
                t--;
                localStorage.setItem('value',String(t));
            }
        }  
ctrl(Number(localStorage.getItem('value')));
    });
//
//ctrl(ind);
//}

//boom(1);
/*unction h(){
    if(event.key===" ")
    {
    clearInterval(k);
    m.style.marginTop=10+"px";
    }
}*/
