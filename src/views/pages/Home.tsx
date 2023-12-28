import Layout from "../layouts/Layout.js";
import Counter from "../components/Counter.js";
import { type FC } from "nano-jsx/esm";

const Home: FC = () => {
	return (
		<Layout>
			<h1 class="text-3xl font-bold underline">Hello world!</h1>
			<Counter />
			<div>
				<a
					href="/info"
					class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				>
					<button>Go to info page</button>
				</a>
			</div>
		</Layout>
	);
};
export default Home;
