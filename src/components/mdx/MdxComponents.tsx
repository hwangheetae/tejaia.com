// components/MDXComponents.tsx
import React, { FC } from "react";
import NextImage from "next/image";

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

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

// MDX Components mapping object
export const MDXComponents = {
  a: Link,
  blockquote: Blockquote,
  img: Image,
};
