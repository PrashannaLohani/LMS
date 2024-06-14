import { Box, Typography } from "@mui/material";
import {
  FilterList as FilterListIcon,
  PermContactCalendar as PermContactCalendarIcon,
  Business as BusinessIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { useState } from "react";

export default function Sidebar() {
  const [activeId, setActiveId] = useState("1");

  const handleBoxClick = (id) => {
    setActiveId(id);
  };
  const navigation = (target) => {
    window.location.href = target;
  };

  return (
    <Box
      bgcolor="primary.main"
      minHeight="100vh"
      maxWidth="5rem"
      display="flex"
      flexDirection="column"
    >
      <Box
        id="1"
        p="1rem"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: activeId === "1" ? "secondary.main" : "transparent",
          color: activeId === "1" ? "primary.text" : "secondary.text",
          cursor: "pointer",
        }}
        onClick={() => {
          handleBoxClick("1");
          navigation("/Pipeline");
        }}
      >
        <FilterListIcon
          sx={{
            color: activeId === "1" ? "primary.text" : "secondary.text",
            transform: "rotate(-90deg)",
          }}
        />

        <Typography
          sx={{
            fontSize: "14px",
            color: activeId === "1" ? "primary.text" : "secondary.text",
            textAlign: "center",
          }}
        >
          Pipeline
        </Typography>
      </Box>
      <Box
        id="2"
        p="1rem"
        onClick={() => {
          handleBoxClick("2");
          navigation("#");
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: activeId === "2" ? "secondary.main" : "transparent",
          color: activeId === "2" ? "primary.text" : "secondary.text",
          cursor: "pointer",
        }}
      >
        <PermContactCalendarIcon
          sx={{ color: activeId === "2" ? "primary.text" : "secondary.text" }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            color: activeId === "2" ? "primary.text" : "secondary.text",
            textAlign: "center",
          }}
        >
          Contact
        </Typography>
      </Box>
      <Box
        id="3"
        p="1rem"
        onClick={() => {
          handleBoxClick("3");
          navigation("#");
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: activeId === "3" ? "secondary.main" : "transparent",
          color: activeId === "3" ? "primary.text" : "secondary.text",
          cursor: "pointer",
        }}
      >
        <BusinessIcon
          sx={{ color: activeId === "3" ? "primary.text" : "secondary.text" }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            color: activeId === "3" ? "primary.text" : "secondary.text",
            textAlign: "center",
          }}
        >
          Companies
        </Typography>
      </Box>
      <Box
        id="4"
        p="1rem"
        onClick={() => {
          handleBoxClick("4");
          navigation("#");
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: activeId === "4" ? "secondary.main" : "transparent",
          color: activeId === "4" ? "primary.text" : "secondary.text",
          cursor: "pointer",
        }}
      >
        <PlaylistAddCheckIcon
          sx={{ color: activeId === "4" ? "primary.text" : "secondary.text" }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            color: activeId === "4" ? "primary.text" : "secondary.text",
            textAlign: "center",
          }}
        >
          Activities
        </Typography>
      </Box>
      <Box
        id="5"
        p="1rem"
        onClick={() => {
          handleBoxClick("5");
          navigation("#");
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: activeId === "5" ? "secondary.main" : "transparent",
          color: activeId === "5" ? "primary.text" : "secondary.text",
          cursor: "pointer",
        }}
      >
        <SettingsIcon
          sx={{ color: activeId === "5" ? "primary.text" : "secondary.text" }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            color: activeId === "5" ? "primary.text" : "secondary.text",
            textAlign: "center",
          }}
        >
          Settings
        </Typography>
      </Box>
    </Box>
  );
}
