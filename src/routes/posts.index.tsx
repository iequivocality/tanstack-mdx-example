import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Hello "/posts/"!
			<ul className="list-disc">
				<li>
					<Link to="/posts/$slug" params={{ slug: "/sample" }}>
						Sample blog here
					</Link>
				</li>
			</ul>
		</div>
	);
}
