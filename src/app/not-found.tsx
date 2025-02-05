import Link from "next/link";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">
        페이지를 찾을 수 없습니다.
      </h2>
      <p className="mb-6 text-center">
        요청하신 페이지가 존재하지 않거나 잘못된 URL입니다.
      </p>
      <Button variant="secondary" asChild>
        <Link href="/" className="flex items-center space-x-2">
          <House className="w-5 h-5" />
          <span>홈으로 돌아가기</span>
        </Link>
      </Button>
    </div>
  );
}
