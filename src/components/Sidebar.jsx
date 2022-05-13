import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Avatar, Box, CardHeader, List, SpeedDial as MuiSpeedDial, MenuItem, Menu as MuiMenu, Fade, SpeedDialAction, SpeedDialIcon, Typography, IconButton } from '@mui/material'
import { WorkOutline, InboxOutlined, ChatOutlined, AccessTimeOutlined, EventOutlined, SettingsOutlined, FileCopy } from "@mui/icons-material";
import Menu from './Menu';
import Favorites from './Favorites';
import { deleteCredentials } from '../utils/functions';

const actions = [
  { icon: <FileCopy />, name: 'Copy' },
];

const menus = [
  { title: "My Tasks", route: "/mytasks", icon: <InboxOutlined /> },
  { title: "Inbox", route: "/inbox", icon: <ChatOutlined /> },
  { title: "Projects", route: "/projects", icon: <WorkOutline /> },
  { title: "Standups", route: "/standups", icon: <AccessTimeOutlined /> },
  { title: "Meetings", route: "/meetings", icon: <EventOutlined /> },
  { title: "Settings", route: "/settings", icon: <SettingsOutlined /> }
];

const favorites = [
  { title: "Redwhale Design", color: "primary" },
  { title: "Mobile App Mock", color: "error" },
  { title: "UI Design Revision", color: "info" }
]

const Sidebar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const userLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <Box bgcolor="#f8f8f8" borderRight="2px solid #eee" flex={2} display="flex" flexDirection="column" justifyContent="space-evenly"
      sx={{ display: { xs: "none", sm: "flex"}}}
    >
      <Box display="flex" alignItems="center" pl={1}>
        <IconButton onClick={handleClick}>
          <Avatar>R</Avatar>
        </IconButton>
        <MuiMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={userLogout}>Logout</MenuItem>
        </MuiMenu>
        <Box>
          <Typography>AR Shakir</Typography>
          <Typography>SR. Visual Designer</Typography>
        </Box>
      </Box>

      <List>
        <Typography paddingLeft="16px">Menu</Typography>
        {menus.map(({ title, route, icon }) => (
          <Menu key={title} title={title} route={route} icon={icon} />
        ))}
      </List>
      <List>
        <Typography paddingLeft="16px">Favorites</Typography>
        {favorites.map(({ title, color }) => (
          <Favorites key={title} title={title} color={color} />
        ))}
      </List>

      <Box sx={{ height: "90px", position: "relative" }}>
        <MuiSpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, left: 16 }}
          FabProps={{
            sx: {
              bgcolor: 'error.main',
              '&:hover': {
                bgcolor: 'error.main',
              }
            }
          }}
          icon={<SpeedDialIcon color='error' />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </MuiSpeedDial>
      </Box>
      <Typography ml="16px">2022 Elvin Mammadli</Typography>
    </Box>
  )
}

export default Sidebar