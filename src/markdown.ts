import fs from "node:fs/promises";
import path from "node:path";
import { compile } from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export type MarkdownData = {
	content: string;
};

export type MarkdownMetadataMatter = {
	title: string;
};

export function hasMetadata(
	frontmatter: unknown,
): frontmatter is MarkdownMetadataMatter {
	const metadata = frontmatter as MarkdownMetadataMatter;
	return metadata.title !== undefined && typeof metadata.title === "string";
}

export async function getMarkdownData(fileUrl: string): Promise<MarkdownData> {
	const mdxSource = await fs.readFile(path.join(process.cwd(), fileUrl));
	const post = String(
		await compile(mdxSource, {
			remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm], // add as diff
			outputFormat: "function-body",
		}),
	);

	return {
		content: post,
	};
}
