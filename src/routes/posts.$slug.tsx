import { run } from "@mdx-js/mdx";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Suspense, use } from "react";
import * as runtime from "react/jsx-runtime";
import { mdxComponents } from "@/components/blog";
import { getMarkdownData, hasMetadata } from "@/markdown";

const getBlog = createServerFn({ method: "GET" })
	/**
	 * Adds type definition to the values passed to the server
	 * function.
	 *
	 * Validate the data passed to the server function.
	 * You can use schema libraries such as Zod for
	 * more complex data.
	 */
	.inputValidator((data: { slug: string }) => data)
	.handler(async ({ data }) => {
		/**
		 * We will try to handle errors later if blog post does not exist.
		 */

		/**
		 * I tried running JSX runtime inside the server function but
		 * return value must be serializable, functions/jsx are not serializable.
		 */
		return getMarkdownData(`content/${data.slug}.mdx`);
	});

export const Route = createFileRoute("/posts/$slug")({
	loader: ({ params: { slug } }) => getBlog({ data: { slug } }),
	component: RouteComponent,
});

function RouteComponent() {
	const post = Route.useLoaderData();

	// run the module as JSX runtime
	const contentRun = run(post.content, {
		...runtime,
		baseUrl: import.meta.url,
	});
	const { default: MDXContent, frontmatter } = use(contentRun);
	console.log(frontmatter);

	if (!hasMetadata(frontmatter)) {
		return null;
	}

	return (
		<Suspense fallback={"Loading..."}>
			<MDXContent components={mdxComponents({})} />
		</Suspense>
	);
}
