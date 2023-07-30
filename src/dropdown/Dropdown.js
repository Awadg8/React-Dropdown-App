import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./dropdown.css";
import List from "../list/List";

function Dropdown(props) {
	const { clicked, list, handleClick } = props;
	return (
		<div>
			<div className="heading">
				<p>Should you use a dropdown ?</p>
			</div>
			<div className="dropdown">
				<div className="select" onMouseEnter={handleClick}>
					<p>Select</p>
					<AiOutlineDown />
				</div>
				{clicked && <List list={list} handleClick={handleClick} />}
			</div>
		</div>
	);
}

export default Dropdown;
