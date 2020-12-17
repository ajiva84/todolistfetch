import React, { useState } from "react";
import { component } from "react";
import PropTypes from "prop-types";

export const InputToDo = props => {
	const [task, setTask] = useState("");

	const handleAdd = e => {
		//Track input field change
		if (e.key === "Enter") {
			// let newTask = props.todolist.concat([
			// 	{
			// 		label: task,
			// 		false: false
			// 	}
			// ]);
			const newTask = props.todolist.concat({ label: task, done: false });
			props.updateTodo(newTask);
			setTask("");
		}
	};

	// props.todolist.concat({label: task, done: false})

	return (
		<div className="inputtodo">
			<div className="header">
				<input
					placeholder="What needs to be done?"
					type="text"
					value={task}
					onChange={e => setTask(event.target.value)}
					onKeyPress={e => handleAdd(e)}
				/>
			</div>
		</div>
	);
};

InputToDo.propTypes = {
	todolist: PropTypes.array,
	settodoList: PropTypes.func,
	updateTodo: PropTypes.func
};
