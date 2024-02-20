
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let carouselVp = document.querySelector(".slide");
let carouselInner = document.querySelector(".slider-inner");
let carouselInnerWidth = carouselInner.getBoundingClientRect().width;
let leftValue = 0;
let slidesImg = document.querySelectorAll('.item img');
let slides = document.querySelectorAll('.item');
const sliderAmount = slides.length-1;
let currentCount = 0;
let allSlides = [];
const singleItemWidth = document.querySelector(".item").getBoundingClientRect().width;

slides.forEach(function(slide,index) {
    // slide.style.left = -(index*singleItemWidth) + singleItemWidth + "px";
    slide.style.transform = "translateX(" + singleItemWidth + "px)";
})

const showImage = () => {
    slides.forEach(function(slide,index) {



        slide.style.display = "block";
        slide.style.transform = "translateX(0px) scale(1)";
        slide.className = 'item';
        if(index === previousItem) {
            slide.style.transform = "translateX(0px) scale(0.7)";
            slide.style.opacity = '0.5';
            // slide.style.left = "-"+ singleItemWidth + "px)";
        } else if (index === nextItem) {
            slide.classList.add("next");
            slide.style.opacity = '0.5';
            slide.style.transform = "translateX(" + singleItemWidth*2 + "px) scale(0.7)";
            // slide.style.left = + singleItemWidth + "px)";
        } else if (index === currentCount) {
            slide.style.transform = "translateX(" + singleItemWidth + "px) scale(1)";
            slide.style.opacity = '1';
            slide.classList.add("active");
        } else if(index === nextNext) {
            slide.style.transform = slide.style.transform.replace('(1)', '(0)');
            // const copy = slide.cloneNode(true);
            slide.classList.add("next-next");
            // copy.style.transform = "translateX(" + singleItemWidth*2 + "px) scale(0)";
            //slide.parentElement.appendChild(copy);
            /*setTimeout(function (){
                slide.parentElement.removeChild(slide);
            },500)*/
        } else if(index === previousPrevious) {
            slide.classList.add("previous-previous");
            slide.style.transform = slide.style.transform.replace('(1)', '(0)')
            const copy = slide.cloneNode(true);
            /*copy.style.transform = "translateX(0px) scale(0)";
            slide.parentElement.prepend(copy);
            setTimeout(function (){
                slide.parentElement.removeChild(slide);
            },500)*/
        } else {
            slide.style.transform = slide.style.transform.replace('(1)', '(0)')
            //slides[sliderAmount].style.left = "-" + singleItemWidth + "px";
        }

        /*if(index > currentCount) {
            slide.style.transform = "translateX(" + singleItemWidth + "px)";
        } else if(index < currentCount) {
            slide.style.transform = "translateX(-" + singleItemWidth + "px)";
        }*/
    })
    if(currentCount === 0) {
        //slides[sliderAmount].style.transform = "translateX(-" + singleItemWidth + "px)";
    }
    if(currentCount === sliderAmount) {
        const doubleWidth = singleItemWidth*2;
        slides[0].style.transform = "translateX(" + doubleWidth + "px) scale(0.7)";
        slides[0].style.display = "block";
        slides[0].style.opacity = "0.5";
    }
}


prev.addEventListener("click", () => {
    if(currentCount === 0) {
        currentCount = sliderAmount;
    } else {
        currentCount--;
    }
    showImage();
});

next.addEventListener("click", () => {
  if(currentCount === sliderAmount) {
      currentCount = 0;
   } else {
      currentCount++;
   }
  showImage();
});

showImage(0);










