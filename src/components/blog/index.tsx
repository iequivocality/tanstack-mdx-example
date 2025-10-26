import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";
import { BlogImage } from "./BlogImage";

export function mdxComponents(components: MDXComponents): MDXComponents {
	return {
		img: (props: ComponentProps<"img"> & { src: string | undefined }) => (
			<BlogImage {...props}></BlogImage>
		),
		...components,
	};
}
