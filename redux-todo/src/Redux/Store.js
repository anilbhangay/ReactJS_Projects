import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/todoSlice'

export default configureStore({
     reducer: {
         todos: todoReducer
     },
});