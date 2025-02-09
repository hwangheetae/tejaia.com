"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { setCookie, getCookie } from "@/hooks/useCookie";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

const Notification = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (getCookie("noShowUntilTomorrow") !== "true") {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    if (checked) {
      setCookie("noShowUntilTomorrow", "true", 1);
    }
    setOpen(false);
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white">
        <DialogHeader className="flex items-center">
          <DialogTitle>블로그 이전 진행 중</DialogTitle>
          <DialogDescription className="text-center p-4 ">
            현재 블로그 이전 중에 있습니다.
            <br /> 이전 블로그를 확인하고 싶으시면&nbsp;
            <a
              href="https://velog.io/@tejaia/posts"
              target="_blank"
              className="underline text-blue-600"
            >
              링크
            </a>
            를 클릭하세요.
          </DialogDescription>
        </DialogHeader>
        {/* 컨텐츠 영역: 체크박스와 닫기 버튼을 같은 row에 배치 */}
        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheck}
              className="h-4 w-4"
            />
            <span className="text-sm">24시간동안 보지 않기</span>
          </label>
          <DialogClose asChild>
            <Button onClick={handleClose} variant="ghost">
              닫기
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Notification;
