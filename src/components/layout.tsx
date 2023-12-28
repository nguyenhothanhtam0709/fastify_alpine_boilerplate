import { FC } from "nano-jsx";

export const Layout: FC<{ children: any }> = (props) => {
	return (
		<html>
			<header>
				<nav style={{ padding: "8px" }}>
					this is the navigation bar{" "}
					<span id="counter-in-header">0</span>
				</nav>
			</header>
			<main>
				<section>{props.children}</section>
			</main>
			<script type="module" src="/public/main.js"></script>
		</html>
	);
};
