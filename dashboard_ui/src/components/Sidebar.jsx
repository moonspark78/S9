import { Drawer, List, ListItemButton, ListItemIcon } from "@mui/material";
import {
  Home as HomeIcon,
  GridView as GridViewIcon,
  Add as AddIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const icons = [
  HomeIcon,
  GridViewIcon,
  AddIcon,
  PeopleIcon,
  BarChartIcon,
  SettingsIcon,
];

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
        {icons.map((IconComponent, index) => (
          <ListItemButton key={index} sx={{ justifyContent: "center" }}>
            <ListItemIcon sx={{ minWidth: 0, color: "#403c3c" }}>
              <IconComponent />
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
