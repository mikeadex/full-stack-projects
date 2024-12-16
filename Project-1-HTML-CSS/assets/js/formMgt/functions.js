'use strict';



const personalInfo = document.getElementById('personal-information');
const education = document.getElementById('education');
const experience = document.getElementById('experience');
const jobInterest = document.getElementById('job-interest');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle-step');
//===============Set the initial state of the form================
let currentActive = 1;
let len = circles.length;

export function updateProgress(stepNum) {
    for (let i = 0; i < stepNum; i++) {
        if (i < len) {
            circles[i].classList.add('active');
        } else {
            circles[i].classList.remove('active');
        }
    }
}


export function showStep(step, stepNum) {
    // Remove active class from all steps
    document.querySelectorAll('.rform').forEach((formStep) => {
        formStep.classList.remove('active');
    });

    // Add active class to the current step
    step.classList.add('active');

    // Update progress bar
    updateProgress(stepNum);

}



//===============Functions================


function nextFun1() {
    currentActive = 2;
    showStep(education, currentActive);
    // update progress bar
}

function nextFun2() {
    currentActive = 3;
    showStep(experience, currentActive);
}

function nextFun3() {
    currentActive = 4;
    showStep(jobInterest, currentActive);
}

function prevFun1() {
    currentActive = 1;
    showStep(personalInfo, currentActive);
}

function prevFun2() {
    currentActive = 2;
    showStep(education, currentActive);
}

function prevFun3() {
    currentActive = 3;
    showStep(experience, currentActive);
}



//===============Event Listeners================
const buttonEvents = () => {
    const cancel = document.getElementById('cancel');
    const next1 = document.getElementById('next1');
    const next2 = document.getElementById('next2');
    const next3 = document.getElementById('next3');
    const prev1 = document.getElementById('prev1');
    const prev2 = document.getElementById('prev2');
    const prev3 = document.getElementById('prev3');

    next1.addEventListener('click', nextFun1);
    next2.addEventListener('click', nextFun2);
    next3.addEventListener('click', nextFun3);
    prev1.addEventListener('click', prevFun1);
    prev2.addEventListener('click', prevFun2);
    prev3.addEventListener('click', prevFun3);

};

document.addEventListener('DOMContentLoaded', buttonEvents);
