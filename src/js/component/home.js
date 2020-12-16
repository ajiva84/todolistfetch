import React, { useState } from "react";

//include images into your bundle

import { InputToDo } from "./input.js";
import { Displayinput } from "./display.js";

//create your first component
export function Home() {
	const taskdisplay = ["This is my first task", "This is my second task"];

	const [todolist, settodoList] = useState(taskdisplay);

	return (
		<div className="jumbotron ml-5 mr-5 mt-2 align-self-center mx-auto">
			<div className="text-center flex-column d-flex align-items-center justify-content-center">
				<h1 Classname="display-5">todos</h1>
			</div>
			<div className="text-center flex-column d-flex align-items-center justify-content-center">
				<InputToDo todolist={todolist} settodoList={settodoList} />
			</div>
			<div className="ml-4 text-start flex-column d-flex justify-content-start align-items-start">
				<Displayinput todolist={todolist} settodoList={settodoList} />
			</div>
		</div>
	);
}
