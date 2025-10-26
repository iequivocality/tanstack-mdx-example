import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="py-4 px-12 flex items-center shadow-lg gap-8">
			<Link to="/">Home</Link>
			<Link to="/posts">Posts</Link>
		</header>
	);
}
