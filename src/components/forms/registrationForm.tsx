import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import ErrorMessage from "../errors/errorMessage";
import { addErrorIntoField } from "utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { RegisRequest } from "interfaces/requestInterface/request";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

//ICON
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const usernameRegExp = /^(?!.*[_.]{2})[^_.].*[^_.]$/g;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g;
const fullNameReqExp = /^(?!.*[_.]{2})[^_.].*[^_.]$/g;
const dateOfBirthReqExp =
  /^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/g;
const emailReqExp = /^(?!.*[_.]{2})[^_.].*[^_.]$/g;

const validationSchema = yup.object({
  fullname: yup
    .string()
    .required("Full name can't be empty!")
    .matches(/^[a-zA-Z]*$/, "Full name can't not contain special characters!"),
  username: yup.string().required("Cannot empty in the Account blank!"),
  // .matches(usernameRegExp, "Cannot start or end with the special word"),

  password: yup.string().required("Please, input your password!"),
  // .matches(
  //   passwordRegExp,
  //   "Password have at least 8 word, an uppercase, a lowercase, a digit and a special word!"
  // ),

  confirmPassword: yup
    .string()
    .required("Please confirm your password!")
    .oneOf([yup.ref("password")], "Passwords must match!"),

  fullName: yup.string().required("Please input your name"),
  // .matches(fullNameReqExp, "Please enter your full name"),

  dateOfBirth: yup
    .string()
    .required("Please input your date of birth")
    .matches(dateOfBirthReqExp, "Date of birth fit with the concept, please"),

  email: yup
    .string()
    .required("Please input your email")
    .matches(emailReqExp, "Please input your email here"),
});

const onSubmit: SubmitHandler<RegisRequest> = async (params) => {
  console.log("Params: ", params);
};
const onError = (error: any) => {
  console.log(error);
};

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gender, setGender] = useState("");

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<RegisRequest> = async (params) => {
    try {
      axios
        .post("api/register/", {
          username: params.username,
          password: params.password,
          fullName: params.fullName,
          dateOfBirth: params.dateOfBirth,
          email: params.email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (e) {
          console.log(e);
        });
    } catch (error) {
      console.log("Error submitting", error);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show: any) => !show);
  const handleMouseDownPassword = () => (event: any) => {
    event.preventDefault();
  };
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show: any) => !show);
  const handleMouseDownConfirmPassword = () => (event: any) => {
    event.preventDefault();
  };

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<any>({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ width: "100%", marginTop: "20px" }}
    >
      <Grid container height={150}>
        <Grid
          xs={4}
          sx={{
            textAlign: "center",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <img
            src={require("../../assets/logo.png")}
            height={110}
            width={140}
          />
        </Grid>
        <Grid
          xs={8}
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: "bolder",
              fontSize: "1.75rem",
              color: "#1d5b9d",
              width: "100%",
            }}
          >
            Sign Up
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#050e18", fontWeight: "500", width: "100%" }}
          >
            It's quick and easy.
          </Typography>
        </Grid>
      </Grid>
      <form
        style={{ width: "100%", padding: "0 42px" }}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Box width="100%" marginBottom={2}>
          <Controller
            name="fullname"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                {...addErrorIntoField(errors["fullname"])}
                sx={{ lineHeight: "56px" }}
                {...register("fullname")}
                id="outlined-start-adornment"
                type="text"
                label="Full name"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {errors["fullname"] ? (
            <ErrorMessage message={errors["fullname"].message} />
          ) : null}
        </Box>

        <Box width="100%" marginBottom={2}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                {...addErrorIntoField(errors["username"])}
                sx={{ lineHeight: "56px" }}
                {...register("username")}
                id="outlined-start-adornment"
                type="text"
                label="Username"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {errors["username"] ? (
            <ErrorMessage message={errors["username"].message} />
          ) : null}
        </Box>

        <Box width="100%" marginBottom={2}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                {...addErrorIntoField(errors["password"])}
                sx={{ lineHeight: "56px" }}
                {...register("password")}
                id="outlined-start-adornment"
                type={showPassword ? "text" : "password"}
                fullWidth
                label="Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordOutlinedIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {errors["password"] ? (
            <ErrorMessage message={errors["password"].message} />
          ) : null}
        </Box>

        <Box width="100%" marginBottom={2}>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                {...addErrorIntoField(errors["confirmPassword"])}
                sx={{ lineHeight: "56px" }}
                {...register("confirmPassword")}
                id="outlined-start-adornment"
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                label="Confirm Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GppGoodOutlinedIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {errors["confirmPassword"] ? (
            <ErrorMessage message={errors["confirmPassword"].message} />
          ) : null}
        </Box>

        <Box width="100%" marginBottom={2}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                {...addErrorIntoField(errors["email"])}
                sx={{ lineHeight: "56px" }}
                {...register("email")}
                id="outlined-start-adornment"
                type="email"
                label="Email"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {errors["email"] ? (
            <ErrorMessage message={errors["email"].message} />
          ) : null}
        </Box>
        <Box width="100%" marginBottom="16px">
          <FormControl fullWidth>
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={gender}
              label="Gender"
              onChange={handleChangeGender}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={0}>Male</MenuItem>
              <MenuItem value={1}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            size="large"
            type="submit"
            style={{
              width: "35%",
              backgroundColor: "#1d5b9d",
              marginRight: "8px",
            }}
          >
            Sign Up
          </Button>
          <Button
            variant="outlined"
            size="large"
            type="submit"
            style={{
              width: "35%",
              color: "#1d5b9d",
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </Button>
        </Grid>
      </form>
    </Grid2>
  );
};

export default RegistrationForm;
