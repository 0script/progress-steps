const progress=document.getElementById('progress-bar');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');

let activecircle=1;

next.addEventListener('click',()=>{
    activecircle++;

    if(activecircle>circles.length){
        activecircle=circles.length;
    }


    update();
    console.log(activecircle);
});


prev.addEventListener('click',()=>{
    activecircle--;

    if(activecircle<1){
        activecircle=1;
    }

    update();
    console.log(activecircle);
});

function update(){
    
    circles.forEach((circle,index)=>{
        if(index<activecircle){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    });

    const actives=document.querySelectorAll('.active');

    console.log(progress.style.color);

    console.log(progress.classList);
    progress.style.width=(actives.length-1)/(circles.length-1)*100 +'%';

    if(activecircle===1){
        prev.disabled=true;
    }else if(activecircle===circles.length){
        next.disabled=true;
    }else{
        next.disabled=false;
        prev.disabled=false;
    }
}