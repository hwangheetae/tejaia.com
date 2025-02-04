// components/MDXComponents.tsx
import React, { FC } from "react";
import NextImage from "next/image";

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Heading components
export const H1: FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <h1 className="text-4xl font-bold mt-10 mb-6" {...props} />
);
export const H2: FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <h2 className="text-3xl font-semibold mt-8 mb-5" {...props} />
);
export const H3: FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <h3 className="text-2xl font-semibold mt-6 mb-4" {...props} />
);

export const H4: FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <h4 className="text-2xl font-semibold mt-6 mb-4" {...props} />
);

// Paragraph
export const Paragraph: FC<React.HTMLAttributes<HTMLParagraphElement>> = (
  props
) => <p className="text-base leading-relaxed my-4" {...props} />;

// Link
export const Link: FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => <a className="text-blue-600 hover:underline" {...props} />;

// Blockquote
export const Blockquote: FC<React.HTMLAttributes<HTMLElement>> = (props) => (
  <blockquote
    className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6"
    {...props}
  />
);

// Inline Code
export const InlineCode: FC<React.HTMLAttributes<HTMLElement>> = (props) => (
  <code
    className="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono"
    {...props}
  />
);

// Preformatted Code Block
export const Pre: FC<React.HTMLAttributes<HTMLPreElement>> = (props) => (
  <pre className="bg-gray-800 border-2 overflow-auto my-6" {...props} />
);

// List elements
export const UnorderedList: FC<React.HTMLAttributes<HTMLUListElement>> = (
  props
) => <ul className="list-disc ml-6 my-4" {...props} />;
export const OrderedList: FC<React.HTMLAttributes<HTMLOListElement>> = (
  props
) => <ol className="list-decimal ml-6 my-4" {...props} />;
export const ListItem: FC<React.HTMLAttributes<HTMLLIElement>> = (props) => (
  <li className="mb-2" {...props} />
);

// Image
export const Image = ({ src, alt, width = 600, height = 600 }: ImageProps) => {
  const isAnimated = src.toLowerCase().endsWith(".gif");

  return (
    <>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mx-auto mb-0 mt-8 rounded-md"
        {...(isAnimated && { unoptimized: true })}
      />
      {alt !== "" && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">
          {alt}
        </span>
      )}
    </>
  );
};

// Horizontal Rule
export const Hr: FC<React.HTMLAttributes<HTMLHRElement>> = (props) => (
  <hr className="border-t border-gray-300 my-8" {...props} />
);

// Table elements
export const Table: FC<React.TableHTMLAttributes<HTMLTableElement>> = (
  props
) => <table className="table-auto w-full text-left my-6" {...props} />;
export const TableHead: FC<React.HTMLAttributes<HTMLTableSectionElement>> = (
  props
) => <thead className="bg-gray-100" {...props} />;
export const TableRow: FC<React.HTMLAttributes<HTMLTableRowElement>> = (
  props
) => <tr className="border-b border-gray-200" {...props} />;
export const TableCell: FC<React.TdHTMLAttributes<HTMLTableCellElement>> = (
  props
) => <td className="px-4 py-2" {...props} />;

// MDX Components mapping object
export const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
  a: Link,
  blockquote: Blockquote,
  inlineCode: InlineCode,
  pre: Pre,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  img: Image,
  hr: Hr,
  table: Table,
  thead: TableHead,
  tr: TableRow,
  td: TableCell,
};
