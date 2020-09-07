import ToDoItem from "./ToDoItem/ToDoItem";
import React from "react";

{posts.map(post => {
	return (
		<ToDoItem
			key={post.id}
			text={post.text}
			checked={post.completed}
			handleChange={() => handleChange(post.id)}
			removeitem={removeitem}

		/>
	)
})}