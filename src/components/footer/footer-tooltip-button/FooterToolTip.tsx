import Link from "next/link";
import { ReactNode } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

interface FooterToolTipButtonProps {
  children: ReactNode;
  link: string;
  content: string;
}

const FooterToolTipButton = ({
  children,
  link,
  content,
}: FooterToolTipButtonProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={link} target="_blank">
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default FooterToolTipButton;
