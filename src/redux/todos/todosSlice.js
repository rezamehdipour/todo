import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		setTodos: (state, action) => { // sets whole 'todos' state to what passed to 'action.payload'
			return action.payload;
		},
		addTodo: (state, action) => { // adds a todo object to 'todos' state
			let newTodoId = 1;
			if (state.length > 0) {
				newTodoId = state[state.length - 1].id + 1;
			}
			let newTodo = {
				id: newTodoId,
				title: action.payload,
				complete: false
			}
			state.push(newTodo);
		},
		removeTodo: (state, action) => { // removes a todo from 'todos' state by it's 'id'
			return state.filter((todo) => todo.id !== action.payload);
		},
		toggleTodo: (state, action) => { // toggles a todo 'complete' property by it's 'id'
			let intendedTodoIndex = state.findIndex((todo) => todo.id === action.payload);
			let intendedTodoComplete = state[intendedTodoIndex].complete;
			state[intendedTodoIndex].complete = !intendedTodoComplete;
		},
	}
})

export const { setTodos, addTodo, removeTodo, toggleTodo, changeTodoTitle } = todosSlice.actions;

export default todosSlice.reducer;