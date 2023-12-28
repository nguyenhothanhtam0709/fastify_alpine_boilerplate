import type { FC } from "nano-jsx/esm";

export const Layout: FC<{ children: any }> = (props) => {
	return (
		<html>
			<head>
				<title>Fastify alpinejs</title>
				<link rel="stylesheet" href="/public/main.css" />
			</head>
			<body>
				<script type="module" src="/public/main.js"></script>
				<header>
					<nav style={{ padding: "8px" }}>
						this is the navigation bar
					</nav>
				</header>
				<main>
					<section>{props.children}</section>
				</main>
			</body>
		</html>
	);
};
