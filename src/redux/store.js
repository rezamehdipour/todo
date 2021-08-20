import { configureStore } from "@reduxjs/toolkit";

// Slices
import todosReducer from './todos/todosSlice';

export default configureStore({
	reducer: {
		todos: todosReducer
	},
})