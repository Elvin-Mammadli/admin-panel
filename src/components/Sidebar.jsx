import { Avatar, Box, CardHeader, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SpeedDial as MuiSpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material'
import { WorkOutline, InboxOutlined, ChatOutlined, AccessTimeOutlined, EventOutlined, SettingsOutlined, CircleOutlined, FileCopy, Save, Print, Share } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import Menu from './Menu';

const actions = [
  { icon: <FileCopy />, name: 'Copy' },
  { icon: <Save />, name: 'Save' },
  { icon: <Print />, name: 'Print' },
  { icon: <Share />, name: 'Share' },
];

const menus = [
  { title: "My Tasks", route: "/mytasks", icon: <InboxOutlined /> },
  { title: "Inbox", route: "/inbox", icon: <ChatOutlined /> },
  { title: "Projects", route: "/projects", icon: <WorkOutline /> },
  { title: "Standups", route: "/standups", icon: <AccessTimeOutlined /> },
  { title: "Meetings", route: "/meetings", icon: <EventOutlined /> },
  { title: "Settings", route: "/settings", icon: <SettingsOutlined /> }
]

const Sidebar = () => {
  return (
    <Box bgcolor="#f8f8f8" borderRight="2px solid #eee" flex={2} display="flex" flexDirection="column" justifyContent="space-around">
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        title="AR Shakir"
        subheader="Sr. Visual Designer"
      />

      <List>
        <Typography paddingLeft="16px">Menu</Typography>
        {menus.map(({ title, route, icon }) => (
          <Menu title={title} route={route} icon={icon} />
        ))}
      </List>
      <List>
        <Typography paddingLeft="16px">Favorites</Typography>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#meetings'>
            <ListItemIcon>
              <CircleOutlined fontSize='small' color='primary' />
            </ListItemIcon>
            <ListItemText primary="Meetings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#meetings'>
            <ListItemIcon>
              <CircleOutlined fontSize='small' color='error' />
            </ListItemIcon>
            <ListItemText primary="Meetings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#meetings'>
            <ListItemIcon>
              <CircleOutlined fontSize='small' color='info' />
            </ListItemIcon>
            <ListItemText primary="Meetings" />
          </ListItemButton>
        </ListItem>
      </List>

      {/* <Box sx={{border: "1px solid blue", position: "relative"}}>
        <MuiSpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, left: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </MuiSpeedDial>
      </Box> */}

      <Typography ml="16px">2022 Elvin Mammadli</Typography>

    </Box>
  )
}

export default Sidebar