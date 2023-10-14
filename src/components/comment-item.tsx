import {
  Avatar,
  Box,
  Button,
  Typography,
  Divider,
  Container,
} from '@mui/material';
import format from 'date-fns/format';

function CommentItem({ comment }) {
  const { by, text, time, kids } = comment;

  return (
    <Container maxWidth="md" sx={{ mt: 1 }}>
      <Box sx={{ display: 'flex', width: '100%', mb: 2 }}>
        <Avatar sx={{ mr: 2 }}>{by.slice(0, 1) || ''}</Avatar>
        <Box>
          <Typography fontSize={20} sx={{ mb: 1 }}>
            {by}
          </Typography>
          <Typography fontSize={18}>{text}</Typography>
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
          <Button>
            <Typography fontSize={16} fontWeight={600} color="primary">
              {`${kids.length} replies`}
            </Typography>
          </Button>
        ) : (
          ''
        )}
      </Box>
      <Divider />
    </Container>
  );
}

export { CommentItem };
