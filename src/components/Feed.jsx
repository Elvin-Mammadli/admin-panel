
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Feed = () => {
  return (
    <Stack flex={5} p={4}>
      <Outlet />
    </Stack>
  )
}

export default Feed;