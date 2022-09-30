import { configureStore } from "@reduxjs/toolkit";
const initState = {
    username : ''}
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, username: action.payload}
        case 'logout':
            return {...state, username: ''}
        default:
            return state
    }
}
const store  = configureStore(
    {
        reducer: { userReducer }
})
export default store