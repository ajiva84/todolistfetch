import React, { useState, useEffect } from "react";

//include images into your bundle

import { InputToDo } from "./input.js";
import { Displayinput } from "./display.js";

//create your first component
export function Home() {
	// const taskdisplay = ["This is my first task", "This is my second task"];
	const URL = "https://assets.breatheco.de/apis/fake/todos/user/ajiva84";
	const [todolist, settodoList] = useState([]);

	useEffect(() => {
		syncData();
	}, []);

	const syncData = () => {
		return fetch(URL)
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				settodoList(data);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};

	const updateTodo = todolist => {
		return fetch(URL, {
			method: "PUT",
			body: JSON.stringify(todolist),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				console.log(data);
				syncData();
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};

	const clearTodoList = todolist => {
		return fetch(URL, {
			method: "delete",
			body: JSON.stringify(todolist),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				console.log(data);
				createTodoList();
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};

	const createTodoList = todolist => {
		return fetch(URL, {
			method: "post",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				console.log(data);
				syncData();
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};

	return (
		<div className="jumbotron ml-5 mr-5 mt-2 align-self-center mx-auto">
			<div className="text-center flex-column d-flex align-items-center justify-content-center">
				<h1 className="display-5">todos</h1>
			</div>
			<div className="text-center flex-column d-flex align-items-center justify-content-center">
				<InputToDo
					todolist={todolist}
					settodoList={settodoList}
					updateTodo={updateTodo}
					// deleteTodo={deleteTodo}
				/>
			</div>
			<div className="ml-4 text-start flex-column d-flex justify-content-start align-items-start">
				<Displayinput
					todolist={todolist}
					settodoList={settodoList}
					updateTodo={updateTodo}
					// deleteTodo={deleteTodo}
				/>
			</div>
		</div>
	);
}
