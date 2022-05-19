const carouselSlide = document.getElementById('carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');

//counter
let count = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)'

//button PREV NEXT
nextBtn.addEventListener('click', ()=>{
    if(count >= carouselImages.length -1)return
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    count++ 
    carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)'
})

prevBtn.addEventListener('click', ()=>{
    if(count <=0)return
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    count--
    carouselSlide.style.transform = 'translateX(' + ( -size * count) + 'px)'
})

carouselSlide.addEventListener('transitionend', () =>{
    if(carouselImages[count].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        count = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)'
    }

    if(carouselImages[count].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        count = carouselImages.length -count;
        carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)'
    }
})