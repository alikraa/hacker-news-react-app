import { Box, Container } from '@mui/material';
import { CommentItem } from './comment-item.tsx';

function NewsComments() {
  return (
    <Box>
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </Box>
  );
}

export { NewsComments };
