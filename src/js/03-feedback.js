import { onFormElInput ,onBtnClick, fillForm } from "./modules/03-input";
import { getDataStorage } from "./modules/03-storage";

const formEl = document.querySelector('.feedback-form');
const btnEl = document.querySelector('button');
const throttle = require('lodash.throttle'); 

fillForm(getDataStorage());
formEl.addEventListener('input', throttle(onFormElInput, 500));
btnEl.addEventListener('click', onBtnClick);

