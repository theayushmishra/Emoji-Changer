const sadFace = document.querySelector('.sad');
const happyFace = document.querySelector('.happy');

sadFace.addEventListener('click', () => {
    if(happyFace.classList.contains('happy')){
        happyFace.classList.add('active');
        sadFace.classList.remove('active');
    }
});

happyFace.addEventListener('click',()=>{
    if(happyFace.classList.contains('active')){
        sadFace.classList.add('active');
        happyFace.classList.remove('active');
    }
})
