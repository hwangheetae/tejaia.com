"use client";
import { useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell } from "lucide-react";
import Link from "next/link";
const Notification = () => {
  const [onOpen, setOnOpen] = useState(true);
  const handleToggle = () => setOnOpen((prev) => !prev);

  return (
    <>
      <div className="flex items-center justify-center mt-4">
        {onOpen ? (
          <>
            <Alert className="w-full max-w-3xl flex flex-col items-center bg-yellow-100 border border-yellow-500 text-yellow-800 shadow-md">
              <div className="flex items-center mb-2">
                <Bell className="h-6 w-6 mr-2" />
                <AlertTitle className="font-bold">
                  블로그 이전 진행중
                </AlertTitle>
              </div>
              <AlertDescription className="text-base text-center">
                제 블로그 정상영업합니다!
                <br />
                <div className="flex items-center justify-center gap-4 mt-2">
                  <Link
                    href="https://velog.io/@tejaia/posts"
                    target="_blank"
                    className="text-base text-blue-600 font-bold"
                  >
                    이전 블로그 가기
                  </Link>
                </div>
                <button
                  onClick={handleToggle}
                  className="text-sm text-gray-700 underline"
                >
                  접기
                </button>
              </AlertDescription>
            </Alert>
          </>
        ) : (
          <Alert className="w-full max-w-3xl flex flex-col bg-yellow-100 border border-yellow-500 text-yellow-800 shadow-md">
            <button onClick={handleToggle} className=" text-blue rounded">
              열기
            </button>
          </Alert>
        )}
      </div>
    </>
  );
};

export default Notification;
