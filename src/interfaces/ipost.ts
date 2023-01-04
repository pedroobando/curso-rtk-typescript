export interface IPOST {
  id: number;
  title: string;
  body: string;
  date: string;
  userId?: number | undefined;
  reactions: {
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
  };
}
