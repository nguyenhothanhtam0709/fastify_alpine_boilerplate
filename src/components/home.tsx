import { Layout } from "./layout.js";
import { Counter } from "./counter.js";

export const Home = () => {
	return (
		<Layout>
			<h1 class="text-3xl font-bold underline">Hello world!</h1>
			<Counter />
		</Layout>
	);
};
