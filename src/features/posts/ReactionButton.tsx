import { FC } from 'react';
import { IPOST } from '../../interfaces';
import { reactionAdded, useAppDispatch } from '../../store';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

interface Props {
  post: IPOST;
}

export const ReactionButtons: FC<Props> = ({ post }) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
      >
        {emoji} {post.reactions[name as keyof typeof post.reactions]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
