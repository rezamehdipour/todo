import { useState, useEffect } from "react";

// Components
import Todo from "./Todo";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setTodos, addTodo, removeTodo, toggleTodo } from "../../redux/todos/todosSlice";

// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Scss
import "./Todos.scss";

toast.configure();
const Todos = (props) => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	// Set initial todos by fetching Todo data from JSON file
	useEffect(() => {
		setTimeout(() => {
			fetch("db/todos.json")
				.then((r) => r.json())
				.then((todos) => dispatch(setTodos(todos)));
		}, 1000);
	}, []);

	// ————— A D D - T O D O —————
	const [newTodo, setNewTodo] = useState("");
	const handleAddTodo = (e) => {
		e.preventDefault();

		if (typeof newTodo === "string" && newTodo.length > 0) {
			dispatch(addTodo(newTodo));
			setNewTodo(""); // Sets 'addTodo input' empty!
			toast.success("Todo Successfully Added !", {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 3500,
				style: {
					backgroundColor: "#029772",
				},
			});
		}
	};

	// ————— R E M O V E - T O D O —————
	const handleRemoveTodo = (todoId) => {
		dispatch(removeTodo(todoId));
	};

	// ————— T O G G L E - T O D O - C O M P L E T E —————
	const handleToggleTodo = (todoId) => {
		dispatch(toggleTodo(todoId));
	};

	return (
		<main>
			<div id="todos">
				<header className="todos__header">
					<form onSubmit={(e) => handleAddTodo(e)}>
						<input
							type="text"
							placeholder="new todo ..."
							value={newTodo}
							onChange={(e) => {
								setNewTodo(e.target.value);
							}}
						/>
						<button type="submit" disabled={newTodo.length < 1 ? true : false}>
							Add
						</button>
					</form>
				</header>
				<div className="todos__list">
					{todos.length < 1 && <div className="flex-center opacity-5">No Todos at the moment !</div>}
					{todos.length > 0 &&
						[...todos].reverse().map(({ id, title, complete }) => {
							return <Todo key={id} id={id} title={title} complete={complete} handleToggleTodo={handleToggleTodo} handleRemoveTodo={handleRemoveTodo} />;
						})}
				</div>
			</div>
		</main>
	);
};

export default Todos;
