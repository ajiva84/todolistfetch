import React from "react";

import { component } from "react";
import PropTypes from "prop-types";
import { InputToDo } from "./input.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Displayinput = props => {
	const handleDel = index => {
		props.settodoList(props.todolist.filter((item, i) => i !== index)); // how to do this with splice??
	};

	const displayTask = props.todolist.map((item, index) => {
		return (
			<li key={index}>
				<a>{item}</a>
				<span onClick={() => handleDel(index)}>
					<FontAwesomeIcon icon={faTimes} />
				</span>
			</li>
		);
	});

	return (
		<div>
			<div>
				<ul className="ba">
					{displayTask.length === 0
						? "No Task, Add a Task"
						: displayTask}

					<li>
						{displayTask.length} item
						{displayTask.length > 1 || displayTask.legnth === 0
							? "s"
							: null}{" "}
						left
					</li>
				</ul>
			</div>
		</div>
	);
};
Displayinput.propTypes = {
	todolist: PropTypes.array,
	settodoList: PropTypes.func
};
