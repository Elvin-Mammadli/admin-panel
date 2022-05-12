import { Add, Key, Lightbulb, MoreHoriz, Search } from '@mui/icons-material';
import {
  Avatar,
  AvatarGroup,
  Box, Button,
  Card,
  Grid,
  InputBase,
  LinearProgress,
  Stack,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { useMemo } from 'react';
import { useState } from 'react';
import { filterTasks } from "../../utils/functions";
import { useSelector } from 'react-redux';
import { getTasks } from '../../store/Tasks/tasks.selectors';
import Task from '../Task';

export const Inbox = () => {
  const tasks = useSelector(getTasks);
  const [value, setValue] = useState('active');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const completedTasks = useMemo(() => filterTasks(tasks, true), [tasks]);
  const unCompletedTasks = useMemo(() => filterTasks(tasks, false), [tasks]);

  console.log("rendered")

  return (
    <Box>
      <Stack
        flex={1}
        direction="column"
        justifyContent="space-between"
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography flex={3} fontSize={25} fontWeight="bold">Hi Shakir!</Typography>
          <Box
            display="flex"
            flex={2}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Typography>15% task completed</Typography>
            <LinearProgress color='error' variant='determinate' value={15} sx={{
              minWidth: "40%", height: 8,
              borderRadius: 5,
            }} />
          </Box>
        </Stack>
        <Grid container spacing={2} >
          <Grid item xs={12} md={5}>
            <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", paddingX: 3, paddingY: 2, bgcolor: "#ee117c", borderRadius: 3 }}>
              <Box display="flex" justifyContent="space-between" my={2}>
                <Box sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "15px",
                  backgroundColor: "#c80061",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white"
                }}>
                  <Lightbulb />
                </Box>
                <MoreHoriz />
              </Box>
              <Typography my={2}>RD for New Banking Mobile App</Typography>
              <AvatarGroup max={3} sx={{ flexDirection: "row" }}>
                <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/64.jpg" />
                <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/22.jpg" />
                <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/52.jpg" />
              </AvatarGroup>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", paddingX: 3, paddingY: 2, bgcolor: "#9a8cff", borderRadius: 3 }}>
              <Box display="flex" justifyContent="space-between" my={2}>
                <Box sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "15px",
                  backgroundColor: "#8f83e4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white"
                }}>
                  <Key />
                </Box>
                <MoreHoriz />
              </Box>
              <Typography my={2}>RD for New Banking Mobile App</Typography>
              <AvatarGroup max={3} sx={{ flexDirection: "row" }}>
                <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/64.jpg" />
                <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/22.jpg" />
                <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/52.jpg" />
              </AvatarGroup>
            </Card>
          </Grid>
        </Grid>
        <Stack direction="row" justifyContent="space-between" alignItems="center" marginTop={1}>
          <Typography>Monthly Tasks</Typography>
          <Box display="flex" gap={1}>
            <Button disableElevation sx={{ borderRadius: "20px", textTransform: "none", bgcolor: "#eee", color: "black" }} variant='contained'>Archive</Button>
            <Button disableElevation sx={{ borderRadius: "20px", textTransform: "none" }} variant='contained' startIcon={<Add />}>New</Button>
          </Box>
        </Stack>
      </Stack>
      <Stack
        flex={1}
        overflow="hidden"
      >
        <Box sx={{ position: "relative" }}>
          <Tabs
            sx={{ padding: "0" }}
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab sx={{ paddingLeft: "0" }} value="active" label="Active Tasks" />
            <Tab value="completed" label="Completed" />
          </Tabs>
          <InputBase sx={{ position: "absolute", width: "25%", right: "0", bottom: "8px" }} placeholder='Search' startAdornment={<Search sx={{ color: "#c9c9c9" }} />} />
        </Box>
        <Box
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}
        >
          {
            value === "active" ? completedTasks.map(({ title, id }) => (
              <Task title={title} key={id} />
            ))
              :
              unCompletedTasks.map(({ title, id }) => (
                <Task title={title} key={id} />
              ))
          }
        </Box>
      </Stack>
    </Box>
  )
};