import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9'
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '2rem', color: '#333' }}>
        Home Page
      </Typography>
    </Box>
  );
}
