import { Badge, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export const Menu = ({ menu, active, setActive }) => {
  const { title, route, icon, notification } = menu;
  return (
    <Link to={route} style={{ textDecoration: 'none', color: "inherit" }}>
      <ListItem disablePadding sx={ active === title ? {borderLeft: "4px solid red"} : null}>
        <ListItemButton onClick={e => setActive(e.target.innerText)}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} sx={{color: "#808080"}}/>
          <Badge badgeContent={notification} color="error"/>
        </ListItemButton>
      </ListItem>
    </Link>
  )
};