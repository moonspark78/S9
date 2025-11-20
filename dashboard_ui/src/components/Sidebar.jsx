import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import AddIcon from "@mui/icons-material/Add";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 70,
        "& .MuiDrawer-paper": { width: 70, bgcolor: "white" },
      }}
    >
      <List sx={{ mt: 8 }}>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0, color: "#403c3c" }}>
            <HomeIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0, color: "#403c3c" }}>
            <GridViewIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0, color: "#403c3c" }}>
            <AddIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0, color: "#403c3c" }}>
            <PeopleIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0, color: "#403c3c" }}>
            <BarChartIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ minWidth: 0, color: "#403c3c" }}>
            <SettingsIcon />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Drawer>
  );
}