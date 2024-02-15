
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
    /*if(index === slides.length-1) {
        slide.style.transform = "translateX(-" + singleItemWidth + "px)";
        slide.style.display = "block";
    }*/
})

const showImage = () => {
    slides.forEach(function(slide,index) {
        let previousItem;
        let nextItem;
        previousItem = currentCount-1;
        nextItem = currentCount+1;

        if(currentCount === 0) {
            previousItem = slides.length-1;
        } else if(currentCount === slides.length-1) {
            nextItem = slides[0];
        }

        slide.style.display = "block";
        slide.style.transform = "translateX(0px) scale(1)";

        if(index === previousItem) {
            slide.style.transform = "translateX(0px) scale(0.7)";
            slide.style.opacity = '0.5';
            // slide.style.left = "-"+ singleItemWidth + "px)";
        } else if (index === nextItem) {
            slide.style.opacity = '0.5';
            slide.style.transform = "translateX(" + singleItemWidth*2 + "px) scale(0.7)";
            // slide.style.left = + singleItemWidth + "px)";
        } else if (index === currentCount) {
            slide.style.transform = "translateX(" + singleItemWidth + "px) scale(1)";
            /*slide.style.transform = "translateX(400px) scale(1)";*/
            slide.style.opacity = '1';
            // slide.style.left = "(0px)";
        } else if(index > nextItem) {
            slide.style.transform = "translateX(" + singleItemWidth*2 + "px) scale(0)";
        } else if(index < nextItem) {
            slide.style.transform = "translateX(0px) scale(0)";
        } else {
            console.log(slide.style.transform.replace('(1)', '(0)'));
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
        console.log('End');
        const doubleWidth = singleItemWidth*2;
        slides[0].style.transform = "translateX(" + doubleWidth + "px) scale(0.7)";
        slides[0].style.display = "block";
        slides[0].style.opacity = "0.5";
    }
}

/*
const totalMovementSize =
    parseFloat(
        document.querySelector(".item").getBoundingClientRect().width,
        10
    ) +
    parseFloat(
        window.getComputedStyle(carouselInner).getPropertyValue("gap"),
        10
    );*/

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










