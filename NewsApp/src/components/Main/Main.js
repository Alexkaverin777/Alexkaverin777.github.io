import React from "react";
import './main.scss'
import NewPost from "./NewsPost/NewPost";
import {NavLink} from "react-router-dom";

const Main = props => {
	const allNews = props.data;
	const newsArr = allNews && allNews.filter((item, index) => index < 6)
		.map((item, index) => (
			<NewPost
				clickTitle={() => props.funClickMe(item.url)}
				key={index}
				title={item.title}
				source={item.source.name}
				url={item.url}
				item={item}
			/>
		));

	return (
		<main className="main">
			<h1 className="title">
				<span className="title-span-block">{props.titleBlock} </span>
				{props.titleSpan}
				<span className="color-active">
					{props.titleSpanColor}
				</span>
			</h1>
			<div className="wrapper-post">
				{newsArr}
			</div>
			<div className={props.allNews}>
				<NavLink to="/allNews" className="allNews__link">{props.allNewsLink}</NavLink>
			</div>
		</main>
	)
};
export default Main
