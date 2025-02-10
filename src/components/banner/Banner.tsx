import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Banner = () => {
  return (
    <header className="flex items-center  p-8 mt-4 border rounded-md dark:bg-">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold" id="resume-name">
          Blog
        </h1>
        <p className="max-w-md text-pretty py-2" aria-labelledby="resume-name">
          개발 공부한 내용들을 다룹니다.
        </p>
      </div>

      <Avatar className="size-28">
        <AvatarImage alt={`블로그 배너`} src={"/images/dog-banner.jpg"} />
      </Avatar>
    </header>
  );
};

export default Banner;
