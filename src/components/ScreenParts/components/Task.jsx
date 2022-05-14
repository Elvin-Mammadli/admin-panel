import { Facebook } from '@mui/icons-material';
import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';

export const Task = ({ title }) => {
  return (
  <Box display="flex" justifyContent="space-between">
    <Box display="flex" alignItems="center">
      <Box sx={{
        width: "40px",
        height: "40px",
        borderRadius: "15px",
        backgroundColor: "#0078c8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        margin: 1
      }}>
        <Facebook />
      </Box>
      <Typography flex={1} fontSize="small">{title}</Typography>
    </Box>
    <AvatarGroup max={3} sx={{ flexDirection: "row", padding: "10px 20px" }}>
      <Avatar sx={{ height: '20px', width: '20px' }} alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/64.jpg" />
      <Avatar sx={{ height: '20px', width: '20px' }} alt="Travis Howard" src="https://randomuser.me/api/portraits/men/22.jpg" />
      <Avatar sx={{ height: '20px', width: '20px' }} alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/52.jpg" />
    </AvatarGroup>
  </Box>
  )
};