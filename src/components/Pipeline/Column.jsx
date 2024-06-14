import { Badge, Box, Typography } from "@mui/material";
import styled from "styled-components";
import Task from "./Task";

export default function Column() {
  const CustomBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-dot": {
      backgroundColor: "#F57F17",
    },
  }));

  return (
    <>
      <Box
        minHeight="761px"
        minWidth="232px"
        py="2px"
        borderRadius="8px 8px 0 0"
        display="flex"
        flexDirection="column"
        gap="0.5rem"
      >
        <Box
          bgcolor="white"
          minHeight="7vh"
          p="10px"
          borderRadius="8px 8px 0 0"
          display="flex"
          flexDirection="column"
          gap="7px"
          sx={{ borderTop: "2px solid #7986CB" }}
        >
          <Box>
            <Typography fontSize="16px">Qualification</Typography>
          </Box>
          <Box display="flex" gap="1rem" alignItems="center">
            <Typography fontSize="14px" color="#616161">
              NPR(2,500)
            </Typography>
            <CustomBadge variant="dot" />
            <Typography fontSize="14px">4 Deals</Typography>
          </Box>
        </Box>
        <Box bgcolor="white" minHeight="689px">
          <Task />
          <Task />
        </Box>
      </Box>
    </>
  );
}
