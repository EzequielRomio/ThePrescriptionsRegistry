import {postPatient} from './patients.js';

const setMenuOption = (payload) => {
    return {type: 'SET_MENU_OPTION', payload}
}

export {
    setMenuOption,

    postPatient
}