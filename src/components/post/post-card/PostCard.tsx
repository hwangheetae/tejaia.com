import Image from "next/image";
import Link from "next/link";

import { CalendarDays } from "lucide-react";

interface PostCardProps {
  title: string;
  desc: string;
  dateString: string;
  thumbnail: string;
  url: string;
}

const PostCard = ({
  title,
  desc,
  dateString,
  thumbnail,
  url,
}: PostCardProps) => {
  return (
    <Link href={url}>
      <li className="flex h-full flex-col gap-3 overflow-hidden rounded-md border shadow-md transition hover:shadow-xl dark:border-slate-700 dark:hover:border-white">
        <div className="relative aspect-video w-full rounded-t-md border-b">
          <Image
            src={thumbnail}
            alt={`thumbnail for ${title}`}
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="p-2">
          <h2 className="mb-3 mt-1 text-lg font-bold sm:text-xl md:text-lg">
            {title}
          </h2>
          <p className="text-sm">{desc}</p>
          <div className="py-2 text-sm flex items-center gap-1">
            <CalendarDays className="w-3.5" />
            <span>{dateString}</span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PostCard;
