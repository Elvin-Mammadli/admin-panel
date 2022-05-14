import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";
import { Sidebar } from "./Sidebar";


export function LeftDrawer(props) {
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
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' }, position: "absolute", top: 2, left: "20px" }}
      >
        <Menu />
      </IconButton>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box'},
        }}
      >
        <Sidebar />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {sm: "30%", md: "28%", lg: "20%"}},
          flex: 2,
        }}
        open
      >
        <Sidebar />
      </Drawer>
    </>
  );
}