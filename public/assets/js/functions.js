'use strict';


import { validateStep1 } from "./sections/validateStep1.js";
import { validateStep2 } from "./sections/validateStep2.js";
import { validateStep3 } from "./sections/validateStep3.js";
import { validateStep4 } from "./sections/validateStep4.js";

const personalInfo = document.getElementById('personal-information');
const education = document.getElementById('education');
const experience = document.getElementById('experience');
const jobInterest = document.getElementById('job-interest');
const personalStatement = document.getElementById('personal-statement');
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


export function nextFun1() {
    if (validateStep1()) {
        currentActive = 2;
        showStep(education, currentActive);

    }
}

export function nextFun2() {
    if (validateStep2()) {
        currentActive = 3;
        showStep(experience, currentActive);
    }
}

export function nextFun3() {
    if (validateStep3()) {
        currentActive = 4;
        showStep(jobInterest, currentActive);
    }

}

export function nextFun4() {
    if (validateStep4()) {
        currentActive = 5;
        showStep(personalStatement, currentActive);
    }
}

export function prevFun1() {
    if (validateStep1()) {
        currentActive = 1;
        showStep(personalInfo, currentActive);
    }
}

export function prevFun2() {
    if (validateStep2()) {
        currentActive = 2;
        showStep(education, currentActive);
    }
}

export function prevFun3() {
    if (validateStep3()) {
        currentActive = 3;
        showStep(experience, currentActive);
    }
}

export function prevFun4() {
    if (validateStep4()) {
        currentActive = 4;
        showStep(jobInterest, currentActive);
    }
}
