import { useEffect } from 'react';
import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';
import { TASKS_ACTIONS } from "../store/Tasks";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TASKS_ACTIONS.fetchTasks());
  }, [dispatch]);

  return (
    <Stack direction="row" spacing={2} justifyContent="space-between" height="100vh">
      <Sidebar />
      <Feed />
      <Rightbar />
    </Stack>
  )
}

export default Main