import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="grid grid-cols-12 p-20 gap-6 min-h-screen">
			<div className="col-span-2 flex flex-col items-center">
				<img
					src="https://picsum.photos/100"
					alt="profile"
					className="size-25 rounded-full mb-4"
				/>
				<span className="text-lg font-bold">Jane Doe</span>
				<span className="font-medium text-gray-600">wife, agent</span>
			</div>
			<div className="col-span-10">
				<Outlet />
			</div>
		</main>
	);
}
