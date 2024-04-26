const progressStepsCourse = document.querySelectorAll(".progress-step-course");
let pageCourse = document.getElementsByClassName("page-course");
let submitBtnCourse = document.querySelector(".formular-course .submit");
const progressCourse = document.getElementById("progress-course");
let textWidgetsCourse;
let radioButtonsCourse;
let currentTabCourse = 0;
let errorsCourse = document.querySelectorAll(".formular-course .formbody p.error")


const div1 = document.createElement("div");
div1.classList.add('notification')
div1.innerHTML = "Bitte füllen Sie alle Felder die mit einem * markiert sind! ";
div1.style.opacity = '1';



document.querySelector(".btn-form-course").addEventListener("click", () => {
    console.log('test');
    /* history.back()*/
    formCourse.style.display = "none";
    btn.style.display = "block";
    btnCourse.style.display = "block";
})


showTabCourse(currentTabCourse);

const checkRadioButtonsCourse = (fieldset) => {
    let result = false;
    fieldset.querySelectorAll('input').forEach(input => {
        if(input.checked) {
            result = true;
        }
    })
    return result;
}

function showTabCourse(index) {
    pageCourse[index].style.display = "block";
    if (index === 0) {
        document.getElementById("prev").style.display = "none";
        document.querySelector(".btn-form-course").style.display = "block";
    } else {
        document.getElementById("prev").style.display = "inline";
        document.querySelector(".btn-form-course").style.display = "none";
    }
    if (index === (pageCourse.length-1)) {
        document.getElementById("next").style.display = "none";
    } else {
        document.getElementById("next").style.display = "inline";
    }
    updateProgressBarCourse(index);
}

function nextPrevCourse(n) {
    if (n === 1 && !validateFormsCourse()) {
        return false;
    } else if(n === -1) {
        if(document.querySelector(".notification")){
            document.querySelector('.notification').style.opacity = '0';
        }
        document.querySelectorAll('.invalid-input').forEach(input => {
            input.classList.remove('invalid-input');
        })
    }
    pageCourse[currentTabCourse].style.display = "none";
    currentTabCourse = currentTabCourse + n;
    showTabCourse(currentTabCourse);
}


function validateFormsCourse() {
    radioButtonsCourse = pageCourse[currentTabCourse].querySelectorAll(".radio_container.mandatory,.checkbox_container.mandatory");
    textWidgetsCourse = pageCourse[currentTabCourse].querySelectorAll('.widget-text.mandatory');
    let checkOK = true;
    radioButtonsCourse.forEach(fieldset1 => {
        if(fieldset1.parentElement.style.display !== 'none'){
            if(checkRadioButtonsCourse(fieldset1) === false) {
                checkOK = false;
                fieldset1.parentElement.appendChild(div);
                document.querySelector('.notification').style.opacity = '1';
            }
        }
    })
    textWidgetsCourse.forEach(widget1 => {
        if(widget1.parentElement.style.display !== 'none') {
            const input1 = widget1.querySelector('input');
            if(input1.value === '') {
                checkOK = false;
                input1.classList.add('invalid-input');
                widget1.parentElement.appendChild(div);
                document.querySelector('.notification').style.opacity = '1';
            }
            input1.addEventListener("input", (e)=> {
                if(e.target.value !== "") {
                    input1.classList.remove('invalid-input');
                }
            });
        }
    })
    return checkOK;

}

function updateProgressBarCourse() {
    progressStepsCourse[0].classList.add("active")
    progressStepsCourse.forEach((progressStep, idx) => {
        if (idx < currentTabCourse + 1) {
            progressStep.classList.add("active");
        } else if (idx < currentTabCourse + 1 ){
            (progressStep +1).classList.add("active");
        } else {
            progressStep.classList.remove("active");
        }
    })
    const progressActive1 = document.querySelectorAll(".progress-step-course.active");
    progressCourse.style.width = ((progressActive1.length - 1) / (progressSteps.length - 1)) * 100 + '%';

}

submitBtnCourse.addEventListener("click", (e) => {
    e.preventDefault();
    if(!validateFormsCourse()) {
        errorsCourse.forEach(error => {
            error.style.color = "crimson";
        })
    } else {
        submitBtnCourse.closest('form').submit();
    }

});

















