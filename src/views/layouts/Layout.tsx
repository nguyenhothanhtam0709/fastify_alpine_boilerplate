import type { FC } from "nano-jsx/esm";

type Props = {
	children: any;
	scripts?: string[];
};
const Layout: FC<Props> = ({ children, scripts = [] }: Props) => {
	return (
		<html>
			<head>
				<title>Nodejs alpinejs</title>
				<link rel="stylesheet" href="/public/main.css" />
			</head>
			<body>
				<script type="module" src="/public/main.js"></script>
				{scripts.map((script) => (
					<script type="module" src={script}></script>
				))}
				{children}
			</body>
		</html>
	);
};
export default Layout;
