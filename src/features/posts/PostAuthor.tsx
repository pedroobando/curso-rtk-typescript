import { FC } from 'react';
import { selectAllUsers, useAppSelector } from '../../store';

interface Props {
  userId?: string | undefined;
}

export const PostAuthor: FC<Props> = ({ userId = '' }) => {
  const users = useAppSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : 'Unknown author'}</span>;
};
