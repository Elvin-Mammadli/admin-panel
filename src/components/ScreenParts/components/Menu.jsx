import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export const Menu = ({ title, route, icon, active, setActive }) => {

  return (
    <Link to={route} style={{ textDecoration: 'none', color: "inherit" }}>
      <ListItem disablePadding sx={ active === title ? {borderLeft: "4px solid red"} : null}>
        <ListItemButton onClick={e => setActive(e.target.innerText)}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={title}  />
        </ListItemButton>
      </ListItem>
    </Link>
  )
};