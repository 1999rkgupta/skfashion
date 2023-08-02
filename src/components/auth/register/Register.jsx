import React, { useState, useEffect } from "react";
import styles from "./_Register.module.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme();


export default function Register() {
  let navigate = useNavigate();
  let [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    dob: "",
  });


  let { userName, email, password, gender, phone, dob } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { userName, email, password, gender, phone, dob };
      console.log(payload);
      window.localStorage.setItem("userName", userName);
      window.localStorage.setItem("email", email);
      window.localStorage.setItem("password", password);
      toast.success(`successfully ${userName} registered`);
      navigate("/login");
    } catch (error) {
      toast.error(error.code);
      console.log(error);
    }
    setState({
      userName: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      dob: "",
    });
  };
  return (
    <div className={styles.registerBlock}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main", background: "#1976d2" }}
            ></Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 0 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="userName"
                    required
                    fullWidth
                    id="name"
                    label="userName"
                    autoFocus
                    value={userName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    label="Phone"
                    type="tel"
                    id="phone"
                    autoComplete="phone"
                    value={phone}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2" to="/login">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
