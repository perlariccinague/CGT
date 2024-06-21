const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let slides = document.querySelectorAll('.item');
const sliderAmount = slides.length-1;
let currentCount = 0;
let singleStandardWidth;

const showImage = () => {
    const wrapper = document.querySelector('.slide')
    const wrapperWidth = wrapper.getBoundingClientRect().width
    singleStandardWidth = wrapperWidth / 3
    const doubleOffset =  singleStandardWidth * 2
    let previousItem;
    let nextItem;
    let previousPrevious;
    let nextNext;
    previousItem = currentCount-1;
    nextItem = currentCount+1;

    if(currentCount === 0) {
        previousItem = slides.length-1;
    } else if(currentCount === slides.length-1) {
        nextItem = 0;
    }

    nextNext = nextItem + 1;
    previousPrevious = previousItem - 1;


    if(previousItem === 0){
        previousPrevious = slides.length-1;
    }
    if(nextItem === slides.length -1) {
        nextNext = 0;
    }

    slides.forEach(function(slide,index) {
        slide.style.display = "block";
        slide.style.transform = "translateX(0px) scale(1)";
        slide.className = 'item';
        if(index === previousItem) {
            slide.style.transform = "translateX(0) scale(0.7)"
            slide.style.opacity = '0.5';
            slide.classList.add("previous");
        } else if (index === nextItem) {
            slide.classList.add("next");
            slide.style.opacity = '0.5';
            slide.style.transform = "translateX(" + doubleOffset + "px) scale(0.7)";
        } else if (index === currentCount) {
            slide.style.transform = "translateX(" + singleStandardWidth + "px) scale(1)";
            slide.style.opacity = '1';
            slide.classList.add("active");
        } else if(index === nextNext) {
           //slide.style.transform = "translateX(" + singleItemWidth*2 + "px) scale(1)";
            slide.style.transform = "translateX(" + doubleOffset + "px) scale(1)";
            slide.style.transform = slide.style.transform.replace('(1)', '(0)');
            slide.classList.add("next-next");
        } else if(index === previousPrevious) {
            slide.classList.add("previous-previous");
            slide.style.transform = slide.style.transform.replace('(1)', '(0)')
        } else {
            slide.style.transform = slide.style.transform.replace('(1)', '(0)')
        }
    })
    if(currentCount === sliderAmount) {
        slides[0].style.transform = "translateX(" + doubleOffset + "px) scale(0.7)";
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

window.addEventListener('resize', function() {
    singleStandardWidth = document.querySelector('.item.active').getBoundingClientRect().width;
    showImage();
})

showImage();










