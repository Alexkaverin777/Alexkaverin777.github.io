import React from 'react';

const Bio = props => {
	return (
		<main className="title">
			<h1 className="first-name"><span>Name</span> {props.name}</h1>
			<h2 className="last-name"><span>Last Name</span> {props.lastName}</h2>
		</main>
	)
};

export default Bio;