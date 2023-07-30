import React from "react";
import Dropdown from "./dropdown/Dropdown";
import "./App.css";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: false,
			list: ["Yes", "Probably not"],
		};
	}

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		const { clicked, list } = this.state;
		return (
			<>
				<Dropdown clicked={clicked} list={list} handleClick={this.handleClick} />
			</>
		);
	}
}
