"use strict";

let rm=document.querySelectorAll('.readmore');
//console.log(rm);

for(let i=0;i<rm.length;i++){
    rm[i].addEventListener("click",function(){
        let temp=document.querySelectorAll(".et");
        temp[i].classList.toggle('hidden');

       
        if(!temp[i].classList.contains('.hidden')){
            rm[i].innerHTML='Read less';
            //console.log("dfjds");
        }

        else{
            rm[i].innerHTML='Read More';
        }
        
    })

   

}



//////////////////////////////////////////////////////////////////////////////////







// const mq=window.matchMedia('(max-width:794px)');



//     document.querySelector('.sidebar').classList.add('sidebargo');
//     document.querySelector('.hamburger').classList.remove('hidden');

// document.querySelector('.cross').style.display='none';

// document.querySelector('.hamburger').addEventListener("click",()=>{
//     console.log("clicked on hamburger");
//     document.querySelector('.sidebar').classList.toggle('sidebargo');
//     if( document.querySelector('.sidebar').classList.contains('sidebargo')){
//         document.querySelector('.ham').style.display='inline';
//         document.querySelector('.cross').style.display='none';

//     }

//     else{
//         document.querySelector('.ham').style.display='none';
        

//         setTimeout(() => {
//             document.querySelector('.cross').style.display='inline';
            
//         }, 350);
        
        

//     }
// })

