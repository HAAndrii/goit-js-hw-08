const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.querySelector('input');
const textEl = formEl.querySelector('textarea');
import { updateStorage, removeStorage } from './03-storage';


function onFormElInput(e) {
    if (!(e.target.nodeName === 'INPUT' || e.target.nodeName === 'TEXTAREA')) {
        return;
    }
   
    updateStorage();
}

const onBtnClick = (e) => {
    e.preventDefault();
    formEl.reset();
    removeStorage();
}

export {inputEl, textEl, onFormElInput, onBtnClick }