const progressSteps = document.querySelectorAll(".progress-step");
let page = document.getElementsByClassName("page");
let accompanyingPersons= document.getElementsByClassName("accompanying-persons");
let accompanyingPersonsNumber = document.querySelector(".accompanying-persons-number");
let submitBtn = document.querySelector(".formular .submit");
let radioButtons1 = document.querySelectorAll(".radio_container.mandatory");
let form = document.querySelector('.formular');
let formCourse = document.querySelector('.formular-course');
let btn = document.querySelector('.registration-btn');
let btnCourse = document.querySelector('.course-btn');
let currentTab = 0;
const progress = document.getElementById("progress");
let radioButtons;
let textWidgets;
let errors = document.querySelectorAll(".formular .formbody p.error")
let accompanied = true;

btn.addEventListener('click', () => {
   form.style.display = "block";
    btn.style.display = "none";
    if(btnCourse) {
        btnCourse.style.display = "none";
    }
})

if(btnCourse) {
    btnCourse.addEventListener('click', () => {
        formCourse.style.display = "block";
        if(btnCourse) {
            btnCourse.style.display = "none";
        }
        btn.style.display = "none";
    })
}

document.querySelector(".btn-form").addEventListener("click", () => {
    console.log('test');
   /* history.back()*/
    form.style.display = "none";
    btn.style.display = "block";
    if(btnCourse) {
        btnCourse.style.display = "block";
    }
})




const div = document.createElement("div");
div.classList.add('notification')
div.innerHTML = "Bitte füllen Sie alle Felder die mit einem * markiert sind! ";
div.style.opacity = '1';




showTab(currentTab);

const checkRadioButtons = (radioButtons) => {
    let result = false;
    radioButtons.querySelectorAll('input').forEach(input => {
        if(input.checked) {
            result = true;
        }
    })
    return result;
}

function showTab(index) {
    page[index].style.display = "block";
    if (index === 0) {
        document.getElementById("prevBtn").style.display = "none";
         document.querySelector(".btn-form").style.display = "block";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
        document.querySelector(".btn-form").style.display= "none";
    }
    if (index === (page.length-1)) {
        document.getElementById("nextBtn").style.display = "none";
        /*document.getElementById("nextBtn").innerHTML = submit.innerHTML;*/
     /*   document.getElementById("nextBtn").style.display = "none";*/
    } else {
      /*  document.getElementById("nextBtn").innerHTML = "Next";*/
        document.getElementById("nextBtn").style.display = "inline";
    }
    updateProgressBar(index)
}



function nextPrev(n) {
    if (n === 1 && !validateForms()) {
        return false;
    } else if(n === -1) {
        if(document.querySelector(".notification")){
            document.querySelector('.notification').style.opacity = '0';
        }
        document.querySelectorAll('.invalid-input').forEach(input => {
            input.classList.remove('invalid-input');
        })
    }
    page[currentTab].style.display = "none";
    if(currentTab === 0 && accompanyingPersonsNumber.value === "0") {
        currentTab = currentTab + n + 1;
        accompanied = false;
    } else if(currentTab === 0 && accompanyingPersonsNumber.value !== "0") {
        accompanied = true;
        currentTab = currentTab + n;
    } else if(currentTab === 2 && accompanied === false && n === -1 ) {
        currentTab = currentTab + n - 1;
    } else {
        currentTab = currentTab + n;
    }
    showTab(currentTab);
}


function validateForms() {
    radioButtons = page[currentTab].querySelectorAll(".radio_container.mandatory,.checkbox_container.mandatory");
    textWidgets = page[currentTab].querySelectorAll('.widget-text.mandatory');
    let checkOK = true;
    radioButtons.forEach(radioButtons => {
        if(radioButtons.parentElement.style.display !== 'none' && radioButtons.parentElement.parentElement.style.display !== 'none'){
            if(checkRadioButtons(radioButtons) === false) {
                checkOK = false;
                radioButtons.parentElement.appendChild(div);
                document.querySelector('.notification').style.opacity = '1';
            }
        }
    })
    textWidgets.forEach(widget => {
        if(widget.parentElement.style.display !== 'none') {
            const input = widget.querySelector('input');
            if(input.value === '') {
                checkOK = false;
                input.classList.add('invalid-input');
                widget.parentElement.appendChild(div);
                document.querySelector('.notification').style.opacity = '1';
            }
            input.addEventListener("input", (e)=> {
                if(e.target.value !== "") {
                    input.classList.remove('invalid-input');
                }
            });
        }
    })
    console.log(checkOK);
    return checkOK;

}

function updateProgressBar() {
    progressSteps[0].classList.add("active")
    progressSteps.forEach((progressStep, idx) => {
        if (idx < currentTab + 1) {
            progressStep.classList.add("active");
        } else if (idx < currentTab + 1 ){
            (progressStep +1).classList.add("active");
        } else {
            progressStep.classList.remove("active");
        }

    })
    const progressActive = document.querySelectorAll(".progress-step.active");
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';

}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(!validateForms()) {
        errors.forEach(error => {
            error.style.color = "crimson";
        })
    } else {
        submitBtn.closest('form').submit();
    }

});

const checkbox = document.querySelector(".yourBox");
const input = document.querySelector(".formular .formbody .page > fieldset .widget.widget-text.yourText input");
const checkboxPerson = document.querySelector(".drawn.test .checkbox");
input.disabled = true;



checkbox.parentElement.addEventListener("mouseup", (ev)=> {
    ev.preventDefault();
    input.disabled = false;
    checkboxPerson.checked = false;
    if(checkbox.checked) {
        checkbox.checked = true;
        input.disabled = true;
    } else {
        input.disabled = false;
    }
})

checkboxPerson.parentElement.addEventListener("mouseup", (ev)=> {
    ev.preventDefault();
    input.disabled = true;
    checkbox.checked = false
    if(checkboxPerson.checked) {
        checkboxPerson.checked = true;
    }
})















