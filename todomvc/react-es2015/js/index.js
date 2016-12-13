import React from "react";
import ReactDOM from "react-dom";
import TodoModel from "./todoModel";
import TodoApp from "./app";

(function () {
	'use strict';

	var model = new TodoModel('react-todos');

	function render() {
		ReactDOM.render(
			<TodoApp model={model}/>,
			document.getElementsByClassName('todoapp')[0]
		);
	}

	model.subscribe(render);
	render();
})();