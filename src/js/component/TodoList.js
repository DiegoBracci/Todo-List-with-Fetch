import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes, { func } from "prop-types";

export const TodoList = props => {
	const [todoList, setTodoList] = useState([]);
	let [newTask, setNewTask] = useState("");

	useEffect(
		() =>
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/braccinunca"
			)
				.then(r => r.json())
				.then(data => setTodoList(data)),
		[]
	);

	const handleTask = () => {
		if (event.key === "Enter" && newTask != "") {
			let addList = todoList.concat({
				label: newTask,
				done: true
			});
			setNewTask("");
			setTodoList(addList);
			putData(addList);
		}
	};

	function putData(data) {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/braccinunca", {
			method: "PUT",
			body: JSON.stringify(data),
			headers: { "Content-type": "applications/json" }
		})
			.then(r => r.json())
			.then(data => {
				console.log(data);
			});
	}
	function deleteData(data) {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/braccinunca", {
			method: "PUT",
			body: JSON.stringify(data),
			headers: { "Content-type": "applications/json" }
		})
			.then(r => r.json())
			.then(data => {
				console.log(data);
			});
	}

	const deleteTask = value => {
		setTodoList(todoList.filter(task => task !== value));
		deleteData(todoList);
	};

	return (
		<div>
			<input
				value={newTask}
				placeholder=" Your List here !"
				onChange={e => setNewTask(e.target.value)}
				onKeyPress={e => handleTask(e)}
			/>
			<ul>
				{todoList.map((item, index) => (
					<li key={index}>
						{item.label} : {item.done ? "yes" : "no"}
						<label
							onClick={() => {
								deleteTask(item);
							}}>
							x
						</label>
					</li>
				))}
			</ul>
			<label className="numberList">{todoList.length} Tasks</label>
		</div>
	);
};
