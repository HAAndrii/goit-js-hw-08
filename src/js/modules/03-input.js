const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.querySelector('input');
const textEl = formEl.querySelector('textarea');
import { updateStorage, removeStorage, getDataStorage } from './03-storage';


function onFormElInput(e) {
    if (!(e.target.nodeName === 'INPUT' || e.target.nodeName === 'TEXTAREA')) {
        return;
    }
   
    updateStorage();
}

const onBtnClick = (e) => {
    e.preventDefault();
    if (!(inputEl.value || textEl.value)) {
        return;
    }
    formEl.reset();
    console.log(getDataStorage());
    removeStorage();
}

const fillForm = (obj) => {
    inputEl.value = obj.email;
    textEl.value = obj.message;
}

export {inputEl, textEl, onFormElInput, onBtnClick, fillForm}