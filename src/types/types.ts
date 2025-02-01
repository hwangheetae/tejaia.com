export interface PostDetail {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
  content: string;
}

export interface Post {
  postDetail: PostDetail;
  url: string;
}

export interface TotalPostProps {
  post: Post & { content: string };
}
