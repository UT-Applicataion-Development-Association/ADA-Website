import React from "react";

// Import data file
import articles from "./articles.json";

export default function GongZhongHaoArticle(props) {
	// id is the index of this article in articles.json
	const id = props.id;
	const info = articles[id];
	return (
		<article>
			<a href={info.href}>
				<img src={props.image} alt={info.title}></img>
			</a>
			<div className="gzh-main-text">
				<h5>{info.title}</h5>
				<p>{info.subtitle}</p>
			</div>
		</article>
	);
}
