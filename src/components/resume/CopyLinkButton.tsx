"use client";

import { useState, useEffect, useRef } from "react";

import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, Copy, XCircle } from "lucide-react";

function useWatchTimeout(watch: unknown, ms: number, callback: () => void) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (watch) {
      timeoutRef.current = setTimeout(callback, ms);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, ms, watch]);
}

interface ButtonProps {
  size?: number;
  className?: string;
  url?: string;
  variant?: "outline" | "default";
}
const CopyLinkButton = ({
  size = 16,
  className,
  url,
  variant = "outline",
}: ButtonProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  useWatchTimeout(copied, 3000, () => {
    setCopied(false);
  });

  const successToast = () =>
    toast({
      title: "Successfully Copied",
      description: (
        <div className="flex items-center gap-3">
          <Check size={16} /> Successfully Copied
        </div>
      ),
    });

  const failToast = () =>
    toast({
      title: "Copy Failed",
      description: (
        <div className="flex items-center gap-3">
          <XCircle size={16} /> Copy Failed
        </div>
      ),
      variant: "destructive",
    });

  const handleCopy = async () => {
    const copyUrl = url ? url : window.document.location.href;
    try {
      await navigator.clipboard.writeText(copyUrl);
      setCopied(true);
      successToast();
    } catch (e) {
      console.error(e);
      failToast();
    }
  };

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={handleCopy}
      className={className}
    >
      <span className="sr-only">Copy</span>
      {copied ? <Check size={size} /> : <Copy size={size} />}
    </Button>
  );
};

export default CopyLinkButton;
