import { PostComment } from "./post-comment";

export class Post {
   userId: number;
   id: number;
   title: string;
   body: string;
   comments: PostComment[] | undefined;
   loading: boolean;
}
