import { AppBar, Box } from "@mui/material";
import Appbars from "../components/Appbars";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <>
      <Appbars />
      <Box display="grid" gridTemplateColumns="1fr 20fr" height="100vh">
        <Sidebar />
        <Outlet />
      </Box>
    </>
  );
}
