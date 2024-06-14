import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

export default function LoginForm({ url }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    setLoading(true); // Set loading to true before making the request
    try {
      const response = await axios.post(`${url}/account/login/`, {
        email_or_mobile: email,
        password: password,
      });
      localStorage.setItem("accessToken", response.data.access_token);
      window.location.href = "/Pipeline"; // Redirect to the Dashboard
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.detail) {
        setError(error.response.data.detail);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false); // Set loading to false after the request completes
    }
  };

  return (
    <Box minHeight="100vh" display="flex">
      <Box p="7rem" minWidth="50%">
        <Box display="flex" flexDirection="column" p="1rem">
          <img
            src="/LOGO.png"
            style={{ height: "80px", width: "100px" }}
            alt="Logo"
          />
          <Box display="flex" flexDirection="column" mt="2rem">
            {error && (
              <Alert variant="filled" severity="error">
                <AlertTitle>Login error</AlertTitle>
                {error}
              </Alert>
            )}
            <Typography variant="h5" ml="5px" mt="1rem">
              Login to access Dashboard
            </Typography>
            <FormControl
              variant="standard"
              color="form"
              sx={{ m: 1, mt: 3, width: "30rem" }}
            >
              <InputLabel htmlFor="Email"> Email or Phone number</InputLabel>
              <Input
                id="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl
              variant="standard"
              color="form"
              sx={{ m: 1, mt: 3, width: "30rem" }}
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ color: "secondary.main" }} />
                      ) : (
                        <Visibility sx={{ color: "secondary.main" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Typography
                color="secondary.main"
                fontSize="14px"
                fontWeight="500"
                mt="1rem"
                display="flex"
                justifyContent="flex-end"
              >
                Forgot password?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: "1rem",
                  backgroundColor: "secondary.main",
                  color: "white",
                }}
                onClick={handleLogin}
                disabled={loading} // Disable the button when loading
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "LOGIN"
                )}
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box
        minWidth="50%"
        flexGrow="1"
        borderRadius="70px 0px 0px 0px"
        p="5rem"
        sx={{
          backgroundImage: `url(/LoginBackground.jpeg)`,
          backgroundSize: "cover",
          minHeight: "100vh",
          backgroundPosition: "right",
          position: "relative", // Ensure this Box is the relative container for the overlay
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to right, rgba(229, 109, 3, 0.7), rgba(211, 47, 47, 0.7))", // Linear gradient background
            borderRadius: "70px 0 0 0 ",
            flexDirection: "column", // To ensure text is centered
          }}
        >
          <Box>
            <Typography fontSize="24px" color="#FFFFFF" fontWeight="400">
              WELCOME TO
            </Typography>
            <Divider
              sx={{
                maxWidth: "10rem",
                backgroundColor: "#E3F2FD",
                height: "6px",
                borderRadius: "4px",
              }}
            />
            <Typography
              fontSize="34px"
              color="#FFFFFF"
              fontWeight="400"
              mt="1rem"
            >
              Sparrow Lead Management
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
