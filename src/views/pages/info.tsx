import { Layout } from "../layouts/layout.js";

export function Info() {
	return (
		<Layout>
			<button
				hx-get="/api/random-info"
				hx-swap="outerHTML"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Click to get info
			</button>
		</Layout>
	);
}
