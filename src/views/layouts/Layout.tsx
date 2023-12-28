import type { FC } from "nano-jsx/esm";

const Layout: FC<{ children: any }> = (props) => {
	return (
		<html>
			<head>
				<title>Fastify alpinejs</title>
				<link rel="stylesheet" href="/public/main.css" />
			</head>
			<body>
				<script type="module" src="/public/main.js"></script>
				{props.children}
			</body>
		</html>
	);
};
export default Layout;
