import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import styles from "./_login.module.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PostContext } from "../../../context/ContextApi";

const theme = createTheme();

export default function Login() {
  let navigate = useNavigate();
  let [state, setState] = useState({ password: "", userEmail: "" });
  let { password, userEmail } = state;
  let { buy, setBuy } = useContext(PostContext);

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = e => {
    e.preventDefault();
    let fetchData = () => {
      try {
        let payload = { password, userEmail };
        console.log(payload);
        let email1 = window.localStorage.getItem("email");
        let password1 = window.localStorage.getItem("password");
        if (email1 === userEmail && password1 === password) {
          navigate("/");
          window.location.reload()
          toast.success(`successfully  ${userEmail} logged in`);
        } else {
          toast.error(`Please enter valid credential`);
        }
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      }
    };

    fetchData();
    setState({ password: "", userEmail: "" });
  };

  return (
    <div className={styles.loginBlock}>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000)",
              backgroundRepeat: "no-repeat",
              backgroundColor: t =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ m: 1, bgcolor: "secondary.main", background: "#1976d2" }}
              ></Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="userEmail"
                  label="userEmail"
                  name="userEmail"
                  autoComplete="userEmail"
                  value={userEmail}
                  onChange={handleChange}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  value={password}
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      onClick={() => setBuy(true)}
                      to="/comingsoon"
                      variant="body2"
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link variant="body2" to="/register">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
