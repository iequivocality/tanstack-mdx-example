export function SimpleCircle({
	width,
	height,
}: {
	width?: number;
	height?: number;
}) {
	return (
		<div
			className="animate-pulse size-25 bg-red-500 rounded-full m-4 hover:animate-none"
			style={{ width: width ?? 100, height: height ?? 100 }}
		></div>
	);
}
