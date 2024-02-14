
/*
const prevButtons = document.querySelectorAll(".btn-prev");
const nextButtons = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".page");
const progressSteps = document.querySelectorAll(".progress-step");
const stepsNumber = formSteps.length;
let formStepsNum = 0;

const div = document.createElement("div");
div.classList.add('meldung')
div.innerHTML = "test.";
div.style.opacity = '1';

console.log(div)


 function validateInputs(ths) {
        let inputsValid = true;

        const inputs = ths.parentElement.parentElement.querySelectorAll("input");
       /!* console.log(inputs)*!/
        for (let i = 0; i < inputs.length; i++) {
            const valid = inputs[i].checkValidity();
          /!*  console.log(valid);*!/
            if (!valid) {
                inputsValid = false;
                inputs[i].classList.add("invalid-input");
            } else {
                inputs[i].classList.remove("invalid-input");
            }
        }
        return inputsValid;
    }

function updateFormSteps() {

    formSteps.forEach(formStep => {
        formStep.classList.contains("active") &&
        formStep.classList.remove("active");
        formStep.appendChild(div)
    })
    formSteps[formStepsNum].classList.add("active");
    console.log(formSteps[formStepsNum].classList.add("active"));
  /!*  formSteps[formStepsNum].appendChild(div)*!/
}

function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("active");
        } else {
            progressStep.classList.remove("active");
        }
    })

    const progressActive = document.querySelectorAll(".progress-step.active");
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';

}

nextButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        let inputsValid = validateInputs(this);
        formStepsNum++;
        if(inputsValid) {
            updateFormSteps();
            updateProgressBar();
        }

    })
})

prevButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        formStepsNum--;
        /!*validateInputs()*!/
        updateFormSteps();
        updateProgressBar();
    })
})
*/

let progressSteps = document.getElementsByClassName("progress-step");
let page = document.getElementsByClassName("page");
let submit = document.querySelector(".formular .submit");
let radioButtons1 = document.querySelectorAll(".radio_container.mandatory")
let currentTab = 0;


showTab(currentTab);

function showTab(index) {
    page[index].style.display = "block";
    if (index === 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (index === (page.length-1 )) {
        /*document.getElementById("nextBtn").innerHTML = submit.innerHTML;*/
     /*   document.getElementById("nextBtn").style.display = "none";*/
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(index)
}

function nextPrev(n) {
    if (n === 1 && !validateForm()) {
        return false;
    }
    page[currentTab].style.display = "none";
    currentTab = currentTab + n;
    showTab(currentTab);
}

function validateForm() {
    let valid = true;
    let currentInput= page[currentTab].getElementsByTagName("input");
    let radioButtons = page[currentTab].getElementsByClassName("radio_container mandatory");

    for (let i = 0; i < currentInput.length; i++) {
        if (currentInput[i].value === "") {
            currentInput[i].classList.add("invalid")
            valid = false;
        }
    }

    for (let i = 0; i < radioButtons.length; i++) {
        console.log(radioButtons[i]);
        radioButtons[i].querySelectorAll("input").forEach(element => {
            if(!element.checked) {
                console.log("test");
                element.classList.add("invalid");
                valid = false;
            } else {
                /*valid = true;*/
                return valid;
            }
        })

    }
    if (valid) {
        progressSteps[currentTab].classList.add("finish");
    }
    return valid;
}

function fixStepIndicator(n) {
    for (let i = 0; i < progressSteps.length; i++) {
        progressSteps[i].className = progressSteps[i].className.replace(" active", "");
    }
    progressSteps[n].classList.add("active")
}








