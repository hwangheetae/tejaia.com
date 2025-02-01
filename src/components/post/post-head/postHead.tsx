import { CalendarDays } from "lucide-react";

interface GrayMatterProps {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
}

interface PostHeadProps {
  grayMatter: GrayMatterProps;
}

const PostHead = ({ grayMatter }: PostHeadProps) => {
  return (
    <header className="my-8 border-b-2 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {grayMatter.title}
      </h1>
      <div className="flex items-center gap-2 my-4 text-sm text-gray-600 dark:text-gray-400 justify-end">
        <CalendarDays className="h-4 w-4" />
        <span>{grayMatter.dateString}</span>
      </div>
    </header>
  );
};

export default PostHead;
