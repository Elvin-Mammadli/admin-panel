import { CircleOutlined } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export const Favorites = ({ title, color, fontSize='small' }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <CircleOutlined fontSize={fontSize} color={color} />
        </ListItemIcon>
        <ListItemText primary={title} sx={{color: "#808080"}}/>
      </ListItemButton>
    </ListItem>
  )
};