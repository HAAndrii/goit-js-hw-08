import {inputEl, textEl} from "./03-input";

const STORAGE_KEY = 'feedback-form-state';


const updateStorage = () => {
    const obj = { [inputEl.name]: inputEl.value, [textEl.name]: textEl.value };
    //console.log(obj);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

const getDataStorage = () => {
    try {
        let obj = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (!obj) {
            obj = {
                email: '',
                message:''
            };
        }
        return obj;
    } catch (error) {
        return
    }    
}

const removeStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
}

export {updateStorage, getDataStorage, removeStorage}
