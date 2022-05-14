import { useEffect } from 'react';
import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Feed } from '../components/ScreenParts';
import { TASKS_ACTIONS } from "../store/Tasks";
import { LeftDrawer, RightDrawer } from "../components/ScreenParts";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TASKS_ACTIONS.fetchTasks());
  }, [dispatch]);

  return (
    <Stack direction="row" spacing={2} justifyContent="space-evenly" height="100vh">
      <LeftDrawer />
      <Feed />
      <RightDrawer />
    </Stack>
  )
}

export default Main;