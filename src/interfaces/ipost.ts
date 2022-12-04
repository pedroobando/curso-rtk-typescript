export interface IPOST {
  id: string;
  title: string;
  content: string;
  date: string;
  userId?: string | undefined;
  reactions: {
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
  };
}
