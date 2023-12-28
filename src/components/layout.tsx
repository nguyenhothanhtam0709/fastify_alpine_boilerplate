import { FC } from "nano-jsx";

export const Layout: FC<{ children: any }> = (props) => {
	return (
		<html>
			<header>
				<nav style={{ padding: "8px" }}>this is the navigation bar</nav>
			</header>
			<link rel="stylesheet" href="/public/main.css" />
			<main>
				<section>{props.children}</section>
			</main>
			<script type="module" src="/public/main.js"></script>
		</html>
	);
};
