import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  NativeSelect,
  Typography,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SearchIcon from "@mui/icons-material/Search";
import Column from "../components/Pipeline/Column";

export default function Pipeline() {
  return (
    <>
      <Box minHeight="100vh" bgcolor="#FAFAFA">
        <Box
          bgcolor="#F5F5F5"
          minHeight="10vh"
          display="flex"
          alignItems="center"
          px="2rem"
          gap="1.3rem"
        >
          <Box display="flex" gap="1.3rem" alignItems="center">
            <Typography variant="h6" fontWeight="500">
              Pipeline
            </Typography>

            <Button
              variant="contained"
              startIcon={<ControlPointIcon />}
              sx={{ bgcolor: "secondary.main", color: "primary.text" }}
            >
              Create
            </Button>
          </Box>
          <hr
            style={{
              border: "none",
              borderLeft: "1px solid #BDBDBD",
              height: "5vh",
              margin: "0 10px",
            }}
          />
          <Box display="flex" gap="1.3rem" alignItems="center">
            <Typography fontSize="16px">Total Leads: 54</Typography>
            <FormControl variant="unstyled">
              <Input
                disableUnderline
                placeholder="Search name or any keyword"
                endAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                sx={{
                  minWidth: "20rem",

                  p: "7px",
                  bgcolor: "primary.text",
                  borderRadius: "8px",
                }}
              />
            </FormControl>
          </Box>
          <Box display="flex" gap="2rem" alignItems="center">
            <Typography fontSize="16px">Sort by</Typography>
            <FormControl>
              <NativeSelect
                defaultValue={1}
                disableUnderline
                sx={{ bgcolor: "white", borderRadius: "16px", px: "1rem" }}
              >
                <option value={1}>My leads only</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Box>
        <Box
          minHeight="90vh"
          bgcolor="#FAFAFA"
          overflow="auto"
          display="flex"
          gap="1rem"
          p="1rem"
        >
          <Column />
          <Column />
          <Column />
        </Box>
      </Box>
    </>
  );
}
