import React, { useState } from "react";
import {
  TextField,
  withStyles,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import BgImg from "../assets/beautiful-night-city.jpg";
import { orange } from "@material-ui/core/colors";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const styles = (theme) => ({
  // margin: {
  //   margin: theme.spacing.unit,
  // },
  cssLabel: {
    "&$cssFocused": {
      color: orange[900],
    },
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: orange[900],
    },
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: orange[900],
    },
  },
  notchedOutline: {},
});

const Signin = (props) => {
  const { classes } = props;
  const initialValues = {
    email: "",
    password: "",
  };
  const [details, setDetails] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(showPassword ? false : true);
    // setShowPassword((showPassword) => !showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="bg-gradient-to-r from-[#1E1E1E] to-[#1E1E1E] w-full h-screen flex items-center justify-center m-auto relative">
      <img
        src={BgImg}
        className="w-full h-full object-cover bg-center absolute mix-blend-overlay"
        alt="/"
      />
      <div className="w-[500px] h-[550px] px-[75px] py-[51px] bg-white ">
        {/* <div className="relative top-[10px] left-[422px]">
            <AiOutlineClose size={20} />
          </div> */}
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="mb-8">
          Don't have an account?{" "}
          <a href="/">
            <font color="#F27B0D"> Sign up</font>
          </a>
        </p>
        {/* material input and button */}
        <div className="mt-6">
          <form noValidate autoComplete="off">
            <TextField
              variant="outlined"
              label="Email"
              margin="normal"
              fullWidth
              className={classes.margin}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
                type: "email",
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
            <TextField
              variant="outlined"
              label="Password"
              margin="normal"
              fullWidth
              className={classes.margin}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                // checked={this.state.checkedB}
                // onChange={this.handleChange("checkedB")}
                // value="checkedB"
                />
              }
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              label="I agree to the terms"
            />
            <div className="mt-10">
              <button
                className="w-[427px] h-[45px] bg-[#F27B0D] text-white font-bold py-2 px-4 inline-flex items-center justify-center text-center relative right-10 top-10"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Signin);
