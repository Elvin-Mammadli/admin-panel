import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

const Menu = ({ title, route, icon }) => {
  return (
    <Link to={route} style={{ textDecoration: 'none', color: "inherit" }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}

export default Menu