import { FC } from 'react';
import { selectAllUsers, useAppSelector } from '../../store';

interface Props {
  userId?: number | undefined;
}

export const PostAuthor: FC<Props> = ({ userId = -1 }) => {
  const users = useAppSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : 'Unknown author'}</span>;
};
