import { Avatar, Box, Typography, Divider, Container } from '@mui/material';

function CommentItem() {
  return (
    <Container maxWidth="md" sx={{ mt: 1 }}>
      <Box sx={{ display: 'flex', width: '100%', mb: 2 }}>
        <Avatar sx={{ mr: 2 }}>A</Avatar>
        <Box>
          <Typography fontSize={20} sx={{ mb: 1 }}>
            author
          </Typography>
          <Typography fontSize={18}>text</Typography>
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
        <Typography fontSize={16}>date</Typography>
        <Typography fontSize={16} color="primary">
          replies
        </Typography>
      </Box>
      <Divider />
    </Container>
  );
}

export { CommentItem };
