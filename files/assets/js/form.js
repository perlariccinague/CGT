const progressSteps = document.querySelectorAll(".progress-step");
let page = document.getElementsByClassName("page");
let submitBtn = document.querySelector(".formular .submit");
let radioButtons1 = document.querySelectorAll(".radio_container.mandatory");
let currentTab = 0;
const progress = document.getElementById("progress");
let radioButtons;
let textWidgets;
let errors = document.querySelectorAll(".formular .formbody p.error")

const div = document.createElement("div");
div.classList.add('notification')
div.innerHTML = "Bitte füllen Sie alle Felder die mit einem * markiert sind! ";
div.style.opacity = '1';


showTab(currentTab);

const checkRadioButtons = (fieldset) => {
    let result = false;
    fieldset.querySelectorAll('input').forEach(input => {
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
    } else {
        document.getElementById("prevBtn").style.display = "inline";
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
    currentTab = currentTab + n;
    showTab(currentTab);
}

function validateForms() {
    radioButtons = page[currentTab].querySelectorAll(".radio_container.mandatory,.checkbox_container.mandatory");
    textWidgets = page[currentTab].querySelectorAll('.widget-text.mandatory');
    let checkOK = true;
    radioButtons.forEach(fieldset => {
        if(fieldset.parentElement.style.display !== 'none'){
            if(checkRadioButtons(fieldset) === false) {
                checkOK = false;
                fieldset.parentElement.appendChild(div);
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
    return checkOK;

}

function updateProgressBar() {
    progressSteps[0].classList.add("active")
    progressSteps.forEach((progressStep, idx) => {
        if (idx < currentTab + 1) {
            progressStep.classList.add("active");
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
        console.log('Error')
    } else {
        submitBtn.closest('form').submit();
    }
    
});












