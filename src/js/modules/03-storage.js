import {inputEl, textEl} from "./03-input";

const STORAGE_KEY = 'feedback-form-state';

const updateStorage = () => {
    const obj = { [inputEl.name]: inputEl.value, [textEl.name]: textEl.value };
    console.log(obj);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

const getDataStorage = () => {
    try {
        const obj = JSON.parse(localStorage.getItem(STORAGE_KEY));
        inputEl.value = obj.email;
        textEl.value = obj.message;
    } catch (error) {
        return
    }    
}

const removeStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
}

export {updateStorage, getDataStorage, removeStorage}
