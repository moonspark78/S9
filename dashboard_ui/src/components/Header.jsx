import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Tableau de bord
        </Typography>
        <Avatar
          sx={{
            bgcolor: "white", 
            width: 50, 
            height: 50,
          }}
        >
          <AccountCircleIcon sx={{ fontSize: 40, color: "#cccccc" }} />
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}
