import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import loginImge from "../../Images/login-banner.webp";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const Navigate = useNavigate();

  const onSubmit = async (value) => {};

  // Style input--------------
  const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#B6FF00", // Changes the label color upon focus
    },
    "& .MuiInputBase-input": {
      color: "#fff", // Set input text color to white
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#ffffff78", // Set placeholder color to white
      opacity: 1, // Ensure placeholder is fully visible
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white", // Default border color
      },
      "&:hover fieldset": {
        borderColor: "white", // Maintain white border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#B6FF00", // Border color on focus
      },
    },
  });
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh" }}
      className="login-page-wrapper"
    >
      <Grid item xs={12} sm={12} lg={6} className="d-flex align-items-center">
        <Box className="d-flex flex-column align-items-center login-form-wrapper py-5 px-md-5 px-3">
          <Typography
            component="h1"
            variant="h4"
            className="mb-md-5 mb-3 text-white font-600"
          >
            Armani Exch247 News
          </Typography>
          <Avatar sx={{ m: 1, backgroundColor: "#fff" }}>
            <LockOutlinedIcon style={{ color: "#B6FF00" }} />
          </Avatar>
          <Typography component="h1" variant="h5" className="text-white">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="text-center  mt-4"
          >
            <CustomTextField
              required
              fullWidth
              id="adminEmail"
              placeholder="Email*"
              type="email"
              name="adminEmail"
              autoComplete="email"
              autoFocus
              {...register("adminEmail")}
              className="mb-4"
            />
            <CustomTextField
              required
              fullWidth
              name="password"
              placeholder="Password*"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
              className="mb-4"
            />

            <Button
              variant="outlined"
              fullWidth
              type="submit"
              sx={{
                border: " 2px solid #B6FF00",
                color: "#000",
                backgroundColor: "#B6FF00", // Background color on hover
                fontWeight: 600,
                "&:hover": {
                  transition: "all .3s",
                  border: "2px solid #617b22",
                  backgroundColor: "#617b22", // Background color on hover
                  color: "#fff",
                },
              }}
              className="py-2"
              onClick={() => {
                Navigate("/dashboard");
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item className="d-xl-block d-none" lg={6}></Grid>
    </Grid>
  );
}
