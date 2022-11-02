window.addEventListener("scroll",() => {
    const scrolled = window.scrollY;
    console.log(document.querySelectorAll("#links a"));

    console.log(scrolled);
    if(scrolled > 100){
        document.getElementById("navbar").style.backgroundColor="aquamarine";
        for(let i=0;i<4;i++){
            document.querySelector("#links").children[i].style.color="black";
        }
    }
    else{
        document.getElementById("navbar").style.backgroundColor="transparent";
        for(let i=0;i<4;i++){
            document.querySelector("#links").children[i].style.color="white";
        }
    }
})
let flag2=0;
document.getElementById("menu").addEventListener("click",() => {
    if(flag2==0){
        document.querySelector("#links").style.display="block";
        document.querySelector("#links").style.position="absolute";
        document.querySelector("#links").style.top="0";
        for(let i=0;i<4;i++){
        document.querySelector("#links").children[i].style.display="block";
        }
        flag2=1;
    }
    else{
        document.querySelector("#links").style.display="none";
        for(let i=0;i<4;i++){
            document.querySelector("#links").children[i].style.display="none";
            document.querySelector("#links").style.position="initial";
            for(let i=0;i<4;i++){
                document.querySelector("#links").children[i].style.display="initial !important";
            }
        }
        flag2=0;
    }
    
    
})

let myMediaQuery = window.matchMedia('(min-width: 1000px)');
 
function widthChangeCallback(myMediaQuery) {
  if(myMediaQuery.matches) {
    document.querySelector("#links").style.position="initial";

    document.querySelector("#links").style.display="flex";
        for(let i=0;i<4;i++){
        document.querySelector("#links").children[i].style.display="inline";
        }
    document.getElementById("nav").style.display="flex !important";
    document.getElementById("nav").style.justifyContent="space-between !important";
    document.getElementById("nav").style.alignItems="center";

    
   } else {
    //document.querySelector("#mid").style.height="0px";
   }
}
 
myMediaQuery.addEventListener('change', widthChangeCallback);

let myMediaQuery2 = window.matchMedia('(max-width: 1000px)');
 
function widthChangeCallback2(myMediaQuery) {
  if(myMediaQuery2.matches) {
    document.querySelector("#links").style.display="none";
        for(let i=0;i<4;i++){
        document.querySelector("#links").children[i].style.display="none";
        }
    document.getElementById("nav").style.display="flex !important";
    document.getElementById("nav").style.justifyContent="space-between !important";
    document.getElementById("nav").style.alignItems="center";

    
   } else {
    //document.querySelector("#mid").style.height="0px";
   }
}
 
myMediaQuery2.addEventListener('change', widthChangeCallback2);


