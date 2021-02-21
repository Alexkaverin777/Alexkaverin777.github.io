import React from "react";
import NewPost from "../Main/NewsPost/NewPost";

const AllNews = props => {
	const allNews = props.data;
	const newsArr = allNews && allNews.filter((item, index) => index < 18)
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
		</main>
	)


};

export default AllNews