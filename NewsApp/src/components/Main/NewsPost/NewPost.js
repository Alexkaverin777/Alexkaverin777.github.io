import React from "react";
import './newPost.scss';
import {NavLink} from "react-router-dom";
import {addZero, getDay, getMonth} from "../../../allFuncition";


const NewPost = props => {
	const item = props.item;

	const month = getMonth(item);
	const formattedMonth = addZero(month + 1);

	const day = getDay(item);
	const formattedDay = addZero(day);

	return (
		<div className="post" >
			<NavLink to='/news/postNews' className="post__title line-blue" onClick={props.clickTitle}>
				{props.title}
			</NavLink>
			<div className="link-bloc">
				<a href={ props.url} >{props.source}</a>
				<div className="link-bloc__date">
					<span>
						{formattedDay}
					</span>
					/ {formattedMonth}
				</div>
			</div>
		</div>
	)
};

export default NewPost
