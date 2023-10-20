import { useEffect, useState } from 'react';
import { Box, Divider } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import { CommentItem } from './comment-item.tsx';

function NewsComments({ comments, descendants }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (descendants === 0) {
      setIsLoading(true);
    } else if (comments.length > 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [descendants, comments.length]);

  return (
    <Box>
      {isLoading ? (
        comments.map((comment) => (
          <>
            <CommentItem key={comment.value.id} comment={comment.value} />
            <Divider />
          </>
        ))
      ) : (
        <LoopIcon color="primary" sx={{ width: '100%', height: 150, mt: 20 }} />
      )}
    </Box>
  );
}

export { NewsComments };
