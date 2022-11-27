import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login">
          <h2 className="login-heading">Login to Majestry Eatry</h2>
          <form className="login_form">
            <FormControl sx={{ my: 2, width: "100%" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Email</InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type="email"
                endAdornment={
                  <InputAdornment position="end">
                    <FaUserAlt />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ my: 2, width: "100%" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <button className="btn-login">
              Login
              <BiLogIn className="fs-2 ms-2" />
            </button>
          </form>
          <div className="login-create my-5">
            <p>Create an account?</p>

            <Link className="signup-link" to="/register">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
