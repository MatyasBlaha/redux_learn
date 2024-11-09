import {configureStore, createSlice} from '@reduxjs/toolkit'

import counterReducer from "./counter";
import authReducer from "./auth";

// store - saved all states
// => useSelector to get data from the store
// => useDispatch to dispatch actions
// => reducer to handle actions and save the state in store
// => new store
// => useSelector ...


// REDUX STORE
const store = configureStore({
    reducer: {
        counter: counterReducer,
        authentication: authReducer
    }
});

export default store;