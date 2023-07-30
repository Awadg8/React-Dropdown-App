import React from "react";
import "./list.css";

function List(props) {
	const { list, handleClick } = props;
	return (
		<>
			<div className="list">
				{list.map((li, index) => {
					return (
						<li key={index} onClick={handleClick}>
							{li}
						</li>
					);
				})}
			</div>
		</>
	);
}

export default List;
