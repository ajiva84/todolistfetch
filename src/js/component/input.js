import React, { useState } from "react";
import { component } from "react";
import PropTypes from "prop-types";

export const InputToDo = props => {
	const [task, setTask] = useState("");

	const handleAdd = e => {
		//Track input field change
		if (e.key === "Enter") {
			const newTask = props.todolist.concat(task);
			props.settodoList(newTask);
			setTask("");
		}
	};

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
	settodoList: PropTypes.func
};
