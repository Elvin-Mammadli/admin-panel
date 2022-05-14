import { Add, Apps, CallEndOutlined, ChevronRight, Clear, DateRange, MoreHoriz, MoreVert, Whatshot } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Button, Chip, Divider, IconButton, InputBase, Stack, Typography } from '@mui/material'
import React from 'react'

export const Rightbar = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack bgcolor="white" flex={3} p={4}>
      <Box display="flex" flexDirection="column" flex={2} my={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight="bolder" fontSize={20}>Today's Schedule</Typography>
          <Box display="flex" bgcolor="#f5f5f5" justifyContent="center" alignItems="center" borderRadius={3} p={1}>
            <Apps />
            <DateRange />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Box>
            <Typography fontSize="small" color="error" fontWeight="600">30 minute call with Client</Typography>
            <Typography fontWeight="700">Project Discovery Call</Typography>
          </Box>
          <Button sx={{ textTransform: "none" }} startIcon={<Add />} variant="text">Invite</Button>
        </Box>
        <Box bgcolor="#59df9c" borderRadius={2} py={1} display="flex" justifyContent="space-between" alignItems="center">
          <AvatarGroup max={3} sx={{ flexDirection: "row", padding: "10px 20px" }}>
            <Avatar sx={{ height: '30px', width: '30px' }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/64.jpg" />
            <Avatar sx={{ height: '30px', width: '30px' }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/22.jpg" />
            <Avatar sx={{ height: '30px', width: '30px' }} alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/52.jpg" />
          </AvatarGroup>
          <Typography color="white">28:35</Typography>
          <Box>
            <IconButton>
              <CallEndOutlined sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <MoreVert sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Divider />
      <Stack flex={2} justifyContent="space-around">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography fontWeight="700">Design Project</Typography>
            <Box display="flex" alignItems="center">
              <Whatshot />
              <Typography fontSize="small" color="#a1a1a1" fontWeight="bold">In Progress</Typography>
            </Box>
          </Box>
          <IconButton>
            <MoreHoriz sx={{ color: "#d1d1d1" }} />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box position="relative">
            <Typography fontSize="small" color="#a1a1a1" fontWeight="bold">Completed</Typography>
            <Box display="flex">
              <Typography fontSize={25} fontWeight="bold">114</Typography>
              <Box sx={{ width: "5px", height: "5px", borderRadius: "50%", bgcolor: "#00e326" }}></Box>
            </Box>
          </Box>
          <Box>
            <Typography fontSize="small" color="#a1a1a1" fontWeight="bold">In Progress</Typography>
            <Box display="flex">
              <Typography fontSize={25} fontWeight="bold">24</Typography>
              <Box sx={{ width: "5px", height: "5px", borderRadius: "50%", bgcolor: "#e30000" }}></Box>
            </Box>
          </Box>
          <Box>
            <Typography fontSize="small" color="#a1a1a1" fontWeight="bold">Team members</Typography>
            <AvatarGroup max={3} sx={{ flexDirection: "row", paddingLeft: "10px" }}>
              <Avatar sx={{ height: '20px', width: '20px' }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/64.jpg" />
              <Avatar sx={{ height: '20px', width: '20px' }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/22.jpg" />
              <Avatar sx={{ height: '20px', width: '20px' }} alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/52.jpg" />
            </AvatarGroup>
            <Box></Box>
          </Box>
        </Box>
      </Stack>
      <Divider />
      <Box flex={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography mt={2} fontWeight="700" fontSize={25}>New Task</Typography>
            <Typography fontSize="small" color="#a1a1a1" fontWeight="bold">Task Title</Typography>
          </Box>
          <IconButton>
            <MoreHoriz sx={{ color: "#d1d1d1" }} />
          </IconButton>
        </Box>
        <InputBase sx={{ width: "100%", bgcolor: "#e3e3e3", borderRadius: "5px", my: "20px" }} />
      </Box>
      <Divider />
      <Box flex={1}>
        <Typography mt={2} mb={1} fontSize="small" color="#a1a1a1" fontWeight="bold">Add Colaborators</Typography>
        <Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
          <Chip
            avatar={<Avatar alt="Natacha" src="https://randomuser.me/api/portraits/women/24.jpg" />}
            label="Angela"
            variant="outlined"
            onDelete={handleDelete}
            deleteIcon={<Clear />}
            style={{backgroundColor:'#edcdff', color: '#5e088f'}}
          />
          <Chip
            avatar={<Avatar alt="Natacha" src="https://randomuser.me/api/portraits/men/24.jpg" />}
            label="Chris"
            variant="outlined"
            onDelete={handleDelete}
            deleteIcon={<Clear />}
            style={{backgroundColor:'#cdffdb', color: '#088f0a'}}
          />
          <IconButton sx={{bgcolor: "#eee"}}>
            <Add />
          </IconButton>
          <IconButton sx={{bgcolor: "#ff0055", color: "white"}}>
            <ChevronRight />
          </IconButton>
        </Box>

      </Box>
    </Stack>
  )
};