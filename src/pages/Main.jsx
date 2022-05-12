import { useEffect } from 'react'
import { Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import { TASKS_ACTIONS, TASKS_SELECTORS } from "../store/Tasks";

const Main = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(TASKS_SELECTORS.getTasks);
  // const loading = useSelector(TASKS_SELECTORS.getTasksLoading);

  console.log("main rendered")

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