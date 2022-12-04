import { FC } from 'react';
import { IPOST } from '../../interfaces';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButton';
import { TimeAgo } from './TimeAgo';

interface Props {
  post: IPOST;
}

export const PostsExcerpt: FC<Props> = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
