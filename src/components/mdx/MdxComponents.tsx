import { Callout } from "./callout";
import { Image } from "./Image";
import { ExternalLink } from "./Link";
import { MDXComponents } from "mdx/types";

export const MdxComponents: MDXComponents = {
  a: ExternalLink, // a 태그를 ExternalLink 컴포넌트로 매핑 (타입 단언)
  img: Image, // img 태그를 Image 컴포넌트로 매핑
  blockquote: Callout, // blockquote 태그를 Callout 컴포넌트로 매핑
};
