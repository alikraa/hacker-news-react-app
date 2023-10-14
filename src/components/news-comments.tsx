import { Box } from '@mui/material';
import { CommentItem } from './comment-item.tsx';

function NewsComments({ comments }) {
  return (
    <Box>
      {comments.map((comment) => (
        <CommentItem key={comment.value.id} comment={comment.value} />
      ))}
    </Box>
  );
}

export { NewsComments };
