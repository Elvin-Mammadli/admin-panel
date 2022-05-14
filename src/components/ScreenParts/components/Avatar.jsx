import { Avatar } from "@mui/material"

export const MyAvatar = ({ src, alt }) => {
  return (
    <Avatar sx={{ height: '30px', width: '30px' }} alt={alt} src={src} />
  )
};