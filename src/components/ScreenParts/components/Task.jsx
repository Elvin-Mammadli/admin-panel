import { Facebook } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export const Task = ({ title }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box sx={{
        width: "40px",
        height: "40px",
        borderRadius: "15px",
        backgroundColor: "#c80061",
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
  )
};