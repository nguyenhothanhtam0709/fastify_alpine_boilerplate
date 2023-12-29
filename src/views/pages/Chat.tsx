import { type FC } from "nano-jsx/esm";
import Layout from "../layouts/Layout.js";

const Chat: FC = () => {
	return (
		<Layout scripts={["/public/chat.js"]}>
			<ul id="messages"></ul>
			<form id="form">
				<input id="input" autocomplete="off" />
				<button>Send Message</button>
			</form>
		</Layout>
	);
};
export default Chat;
