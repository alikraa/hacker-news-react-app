import { useEffect, useState } from 'react';
import { Avatar, Box, Button, Typography, Container } from '@mui/material';
import format from 'date-fns/format';
import { getStories } from '../ts/request.ts';
import { defaultComment } from '../ts/consts.ts';
import { CommentData, CommentItemProps } from '../ts/types.ts';

function CommentItem({ comment }: CommentItemProps) {
  const { by, text, time, kids } = comment;

  const [openReplies, setOpenReplies] = useState(false);
  const [kidComments, setKidComments] = useState<CommentData[]>(defaultComment);

  useEffect(() => {
    if (kids) {
      getStories(kids).then((data) => setKidComments(data));
    }
  });

  const showReplies = () =>
    openReplies ? setOpenReplies(false) : setOpenReplies(true);

  return (
    <Container maxWidth="md" sx={{ mt: 1 }}>
      <Box sx={{ display: 'flex', width: '100%', mb: 2 }}>
        <Avatar sx={{ mr: 2, bgcolor: '#3fbd3a' }}>
          {by.slice(0, 1) || ''}
        </Avatar>
        <Box>
          <Typography fontSize={20} sx={{ mb: 1 }}>
            {by}
          </Typography>
          <Typography fontSize={18} sx={{ wordBreak: 'break-word' }}>
            {text}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '450px',
          ml: 7,
          mb: 1,
        }}
      >
        <Typography fontSize={16} color="primary">
          {format(new Date(time * 1000), 'PPp')}
        </Typography>
        {kids ? (
          <Button onClick={showReplies}>
            <Typography fontSize={16} fontWeight={600} color="primary">
              {`${kids.length} replies`}
            </Typography>
          </Button>
        ) : (
          ''
        )}
      </Box>
      {openReplies
        ? kidComments.map((item) => <CommentItem comment={item.value} />)
        : ''}
    </Container>
  );
}

export { CommentItem };
