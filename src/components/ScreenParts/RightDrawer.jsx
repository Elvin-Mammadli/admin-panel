import { useState } from "react";
import { ChevronLeft } from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";
import { Rightbar } from "./Rightbar";


export function RightDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerToggle}
        sx={{ ml: 2, display: { lg: 'none' }, position: "absolute", top: 2, right: "20px" }}
      >
        <ChevronLeft />
      </IconButton>

      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { lg: 'block'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box'},
        }}
      >
        <Rightbar />
      </Drawer>
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          display: { xs: 'none', lg: 'flex' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {lg: "28%"}},
          flex: 3,
        }}
        open
      >
        <Rightbar />
      </Drawer>
    </>
  );
}