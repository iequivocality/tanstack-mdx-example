import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-screen">
			HOME PAGE
			<ul className="list-disc">
				<li>
					<Link className="text-blue-500" to="/posts/$slug" params={{ slug: "/sample" }}>
						Sample blog here
					</Link>
				</li>
			</ul>
		</div>
	);
}
