import React from "react";

import { component } from "react";
import PropTypes from "prop-types";
import { InputToDo } from "./input.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const Displayinput = props => {
	const handleDel = index => {
		const newDisplay = props.todolist.filter((item, i) => i !== index);

		props.settodoList(newDisplay); // how to do this with splice??\
		props.updateTodo(newDisplay);
	};

	const clearAll = () => {
		props.settodoList([]);
	};

	const displayTask = props.todolist.map((item, index) => {
		return (
			<li
				className="d-flex justify-content-between list-group-item"
				key={index}>
				<a>{item.label}</a>
				<span onClick={() => handleDel(index)}>
					<FontAwesomeIcon icon={faTimes} />{" "}
				</span>
			</li>
		);
	});

	return (
		<ul className="w-100 list-group">
			{displayTask.length === 0 ? "No Task, Add a Task" : displayTask}

			<li className="d-flex justify-content-between list-group-item">
				{displayTask.length} item
				{displayTask.length > 1 || displayTask.legnth === 0
					? "s"
					: null}{" "}
				left
				<div>
					<span onClick={() => clearAll()}>
						<FontAwesomeIcon icon={faTrashAlt} />
					</span>
				</div>
			</li>
		</ul>
	);
};
Displayinput.propTypes = {
	todolist: PropTypes.array,
	settodoList: PropTypes.func,
	updateTodo: PropTypes.func
};
