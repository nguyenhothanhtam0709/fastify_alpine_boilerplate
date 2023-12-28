import { Component } from "nano-jsx";

export class Counter extends Component {
	render() {
		return (
			<div
				id="count-component"
				style={{
					backgroundColor: "antiquewhite",
					padding: "8px",
					display: "inline-block",
				}}
				x-data="{ count: 0 }"
			>
				<div>
					counter: <span x-text="count"></span>
				</div>
				<button x-on:click="count = count > 0 ? count-1 : count">
					-
				</button>
				<button x-on:click="count++">+</button>
			</div>
		);
	}
}
