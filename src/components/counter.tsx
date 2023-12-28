import { Component } from "nano-jsx";

export class Counter extends Component {
	render() {
		return (
			<div
				style={{
					backgroundColor: "antiquewhite",
					padding: "8px",
					display: "inline-block",
				}}
				x-data="{ count: 0 }"
			>
				<div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
					<button
						class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
						x-on:click="count = count > 0 ? count-1 : count"
					>
						<span class="m-auto text-2xl font-thin">-</span>
					</button>
					<span
						class="outline-none focus:outline-none justify-center text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
						x-text="count"
					></span>
					<button
						x-on:click="count++"
						class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
					>
						<span class="m-auto text-2xl font-thin">+</span>
					</button>
				</div>
			</div>
		);
	}
}
