'use strict';
import {
    nextFun1,
    nextFun2,
    nextFun3,
    nextFun4,
    prevFun1,
    prevFun2,
    prevFun3,
    prevFun4
} from './functions.js';


// import { addEducationField } from './addEducation.js';

const circles = document.querySelectorAll('.circle-step');
//===============Set the initial state of the form================
let currentActive = 1;
let len = circles.length;


//===============Event Listeners================
const buttonEvents = () => {
    const cancel = document.getElementById('cancel');
    const next1 = document.getElementById('next1');
    const next2 = document.getElementById('next2');
    const next3 = document.getElementById('next3');
    const next4 = document.getElementById('next4');
    const prev1 = document.getElementById('prev1');
    const prev2 = document.getElementById('prev2');
    const prev3 = document.getElementById('prev3');
    const prev4 = document.getElementById('prev4');

    next1.addEventListener('click', nextFun1);
    next2.addEventListener('click', nextFun2);
    next3.addEventListener('click', nextFun3);
    next4.addEventListener('click', nextFun4);
    prev1.addEventListener('click', prevFun1);
    prev2.addEventListener('click', prevFun2);
    prev3.addEventListener('click', prevFun3);
    prev4.addEventListener('click', prevFun4);

};

document.addEventListener('DOMContentLoaded', buttonEvents);

