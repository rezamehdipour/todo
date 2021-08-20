import { motion } from "framer-motion";

// Icons
import { GiCheckMark } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineRefresh } from "react-icons/hi";

// Scss
import "./Todo.scss";

const Todo = ({ id, title, complete, handleToggleTodo, handleRemoveTodo }) => {
	const containerAnimate = { opacity: 1, height: "auto" };
	const containerInitial = { opacity: 0 };

	const titleAnimation = { scale: 1 };
	const titleInitial = { scale: 0.1 };
	const titleTransition = { duration: 0.05 };

	return (
		<motion.div className={"todo" + (complete === true ? " complete" : "")} animate={containerAnimate} initial={containerInitial}>
			<motion.h3 className="todo__title" animate={titleAnimation} initial={titleInitial} transition={titleTransition}>
				{title}
			</motion.h3>
			<div className="todo__buttons">
				<button className={complete === false ? "check" : "revert"} onClick={() => handleToggleTodo(id)}>
					{complete === false ? <GiCheckMark color="white" /> : <HiOutlineRefresh color="white" />}
				</button>
				<button className="delete" onClick={() => handleRemoveTodo(id)}>
					<RiDeleteBin6Line color="white" />
				</button>
			</div>
		</motion.div>
	);
};

export default Todo;
