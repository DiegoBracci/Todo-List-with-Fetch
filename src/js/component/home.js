import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include images into your bundle
import { NavBar } from "./navbar.js";
import { TodoList } from "./TodoList.js";

//create your first component
export function Home() {
	//let [inputValue, setValue] = useState("");
	return (
		<div>
			<NavBar />
			<div className="container">
				<div>
					<TodoList />
				</div>
			</div>
		</div>
	);
}
