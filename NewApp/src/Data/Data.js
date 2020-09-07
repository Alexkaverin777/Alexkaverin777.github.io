import React from 'react';

const EndDate = props => {
	return (
		<div className="bloc-date">
			<div className="date">
				<p>Дата выполнения ДЗ <span>{props.date}</span></p>
			</div>
			<div className="time">
				<p>Время когда закончил делать ДЗ <span>{props.time}</span></p>
			</div>
		</div>
	)

};


export default EndDate