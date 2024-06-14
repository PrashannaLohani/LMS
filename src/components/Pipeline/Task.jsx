import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import ModeIcon from "@mui/icons-material/Mode";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useState } from "react";

export default function Task() {
  const CustomBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-dot": {
      backgroundColor: "#F57F17",
    },
  }));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        minHeight="10vh"
        p="10px"
        sx={{
          "&:hover": {
            color: "#181717",
            transform: "translateY(-2px)",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          },
          transition: "0.5s",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography fontSize="14px" fontWeight="500">
            Khalti Limited
          </Typography>
          <Box>
            <IconButton>
              <ModeIcon />
            </IconButton>
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "#2196F3",
                },
              }}
            />
          </Box>
        </Box>
        <Typography fontSize="14px" fontWeight="400">
          Ram Krishna
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize="14px" color="#616161">
            NPR(2,500)
          </Typography>
          <CustomBadge variant="dot" />
          <Typography fontSize="14px">4 Deals</Typography>
          <Tooltip title="More Option">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <AddCircleOutlineIcon sx={{ color: "secondary.main" }} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "primary.main",
                  color: "secondary.main",
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              Create a task
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              Create an event
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PhoneAndroidIcon />
              </ListItemIcon>
              Log a Call
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
