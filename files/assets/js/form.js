
const prevButtons = document.querySelectorAll(".btn-prev");
const nextButtons = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".page");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

 function validateInputs(ths) {
        let inputsValid = true;

        const inputs = ths.parentElement.parentElement.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
            const valid = inputs[i].checkValidity();
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
    })
    formSteps[formStepsNum].classList.add("active");
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
            console.log("next")
        }

    })
})

prevButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        formStepsNum--;
        /*validateInputs()*/
        updateFormSteps();
        updateProgressBar();
        console.log("previous")
    })
})




/*const progressNumber = document.querySelectorAll(".progress-step").length;
const slidePage = document.querySelector(".slide-page");
const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".next");
const prevButtons = document.querySelectorAll(".prev");
const stepsNumber = pages.length;
console.log(stepsNumber)

if (progressNumber !== stepsNumber) {
    console.warn(
        "Error, number of steps in progress bar do not match number of pages"
    );
}*/

/*

initMultiStepForm();

function initMultiStepForm() {
    const progressNumber = document.querySelectorAll(".progress-step").length;
    const progressbar= document.querySelectorAll(".progress-step");
    const slidePage = document.querySelector(".slide-page");
    const submitBtn = document.querySelector(".submit");
    const pages = document.querySelectorAll(".page");
    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");
    const stepsNumber = pages.length;

    if (progressNumber !== stepsNumber) {
        console.warn(
            "Error, number of steps in progress bar do not match number of pages"
        );
    }

    document.documentElement.style.setProperty("--stepNumber", stepsNumber);

    let current = 1;

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("click", function (event) {
            event.preventDefault();

            let inputsValid = validateInputs(this);
            // inputsValid = true;

            if (inputsValid) {
               /!* slidePage.style.marginLeft = `-${(100 / stepsNumber) * current }%`;*!/
                slidePage.style.marginLeft = "10%";
                progressbar[current - 1].classList.add("active")
                current += 1;
            }
        });
    }

    for (let i = 0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = `-${(100 / stepsNumber) * (current - 2)}%`;
            progressbar[current - 2].classList.remove("active")
            current -= 1;
        });
    }

    function validateInputs(ths) {
        let inputsValid = true;

        const inputs =
            ths.parentElement.parentElement.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
            const valid = inputs[i].checkValidity();
            if (!valid) {
                inputsValid = false;
                inputs[i].classList.add("invalid-input");
            } else {
                inputs[i].classList.remove("invalid-input");
            }
        }
        return inputsValid;
    }
}
*/




