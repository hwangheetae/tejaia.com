import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx/MdxComponents";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

interface ContentProps {
  content: string;
}
const PostBody = ({ content }: ContentProps) => {
  return (
    <div>
      <MDXRemote
        source={content}
        components={MDXComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: { dark: "github-dark-dimmed", light: "github-light" },
                },
              ],
              rehypeSlug,
            ],
          },
        }}
      />
    </div>
  );
};

export default PostBody;
