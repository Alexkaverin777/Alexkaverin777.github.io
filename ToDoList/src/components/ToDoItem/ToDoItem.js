import React from 'react';
import './ToDoItem.css';
import ButtonClose from "../ButtonClose/ButtonClose";

const ToDoItems = props => {

	return (
		<div className="block-input">
			<label className="text-label">{props.text}
				<input
					type="checkbox"
				   defaultChecked={props.checked}
					className="input-list"
					onChange={props.handleChange}
				/>
				<span></span>
			</label>
			<ButtonClose
				classBtn="closePostBtn"
				click={props.removeitem}
			/>
		</div>
	)
};

export default ToDoItems

