import { InboxOutlined } from "@mui/icons-material"
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

const Menu = ({ title, route, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <Link to={route}>
          <ListItemText primary={title} />
        </Link>
      </ListItemButton>
    </ListItem>
  )
}

export default Menu