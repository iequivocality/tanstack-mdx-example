import type { ComponentProps } from "react";

export function BlogImage({
	title,
	alt,
	className,
	src,
	...rest
}: ComponentProps<"img"> & { src: string | undefined }) {
	return (
		<a
			className="flex flex-col overflow-hidden rounded-md mb-6"
			href={src}
			target="_blank"
			rel="noreferrer"
		>
			<img
				title={title}
				alt={alt}
				src={src}
				{...rest}
				className="m-0 rounded-md not-prose max-h-[360px] object-cover"
			></img>
			<span className="px-1 py-2 text-sm text-dark-blue dark:text-yellow">
				{title}
			</span>
		</a>
	);
}
