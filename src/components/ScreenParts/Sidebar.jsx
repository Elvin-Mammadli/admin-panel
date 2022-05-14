import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Avatar, Box, List, SpeedDial as MuiSpeedDial, MenuItem, Menu as MuiMenu, SpeedDialAction, SpeedDialIcon, Typography, IconButton } from '@mui/material'
import { WorkOutline, InboxOutlined, ChatOutlined, AccessTimeOutlined, EventOutlined, SettingsOutlined, FileCopy } from "@mui/icons-material";
import { Menu, Favorites } from './components';

const actions = [
  { icon: <FileCopy />, name: 'Copy' },
];

const menus = [
  { title: "My Tasks", route: "/mytasks", icon: <InboxOutlined />, id: 1 },
  { title: "Inbox", route: "/inbox", icon: <ChatOutlined />, id: 2},
  { title: "Projects", route: "/projects", icon: <WorkOutline />, id:3 },
  { title: "Standups", route: "/standups", icon: <AccessTimeOutlined />, id: 4 },
  { title: "Meetings", route: "/meetings", icon: <EventOutlined />, id: 5 },
  { title: "Settings", route: "/settings", icon: <SettingsOutlined />, id: 6 }
];

const favorites = [
  { title: "Redwhale Design", color: "primary" },
  { title: "Mobile App Mock", color: "error" },
  { title: "UI Design Revision", color: "info" }
]


export const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Inbox");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const userLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <Box bgcolor="#f8f8f8" display="flex" flex={2} flexDirection="column" justifyContent="space-evenly">
      <Box display="flex" alignItems="center" pl={1}>
        <IconButton onClick={handleClick}>
          <Avatar src="https://randomuser.me/api/portraits/men/29.jpg"/>
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
        {menus.map(({ title, route, icon, id }) => (
          <Menu key={id} title={title} route={route} icon={icon} active={active} setActive={setActive} />
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
};