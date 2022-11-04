import React from "react";

function Result({ result, openDetail }) {
return (
	<div className="result" onClick=
		{() => openDetail(result.imdbID)}>
	<img src={result.Poster} />
	<h3>{result.Title}, {result.Year}</h3>
	<h1></h1>
	</div>
);
}

export default Result;
