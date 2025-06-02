import {legacy_createStore as creatStore} from "redux";
const globalReducer = (state, action) => {
    return state;
}

export const store = creatStore(globalReducer);
