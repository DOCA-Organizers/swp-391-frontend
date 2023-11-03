import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Typography,
  Grid,
  TextField,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from "@mui/material/styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { addErrorIntoField } from "utils/utils";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import ErrorMessage from "components/errors/errorMessage";
import { LoginRequest } from "interfaces/login/loginRequest";
import { useState } from "react";

// const usernameRegExp = /^(?!.*[_.]{2})[^_.].*[^_.]$/g;
// const passwordRegExp =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g;

const validationSchema = yup.object({
  username: yup.string().required("Cannot empty in the Account blank!"),
  // .matches(usernameRegExp, "Cannot start or end with the special word"),

  password: yup.string().required("Please, input your password!"),
  // .matches(
  //   passwordRegExp,
  //   "Password have al least 8 word, an uppercase, a lowercase, a digit and a special word!"
  // ),
});
const leftGridStyle = {
  marginTop: "20px",
};

const rightGridStyle = {
  marginTop: "20px",
  width: "100%",
};

const titleStyle = {
  fontWeight: "bolder",
};

const gridStyle = {
  marginTop: "10px",
  marginBottom: "10px",
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<LoginRequest>({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginRequest> = async (data: any) => {
    console.log(data);
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const handleClickShowPassword = () => setShowPassword((show: any) => !show);
  const handleMouseDownPassword = () => (event: any) => {
    event.preventDefault();
  };

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ width: "100%", marginTop: "80px" }}
    >
      <Box width={200} height={140} margin="0 auto">
        {" "}
        <img
          width="100%"
          height="100%"
          alt="Logo"
          src={require("../../assets/Huy's logo.png")}
        />
      </Box>
      <Box width={450} height={240} margin="0 auto">
        {/* <Typography
          style={{
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
            color: "#18345E",
          }}
        >
          Login
        </Typography> */}

        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Grid container={true} style={gridStyle}>
            <Grid style={leftGridStyle} item xs={3}>
              <Typography style={titleStyle} sx={{ lineHeight: "56px" }}>
                Username
              </Typography>
            </Grid>
            <Grid item style={rightGridStyle} xs={9}>
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
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              {errors["username"] ? (
                <ErrorMessage message={errors["username"].message} />
              ) : null}
            </Grid>
          </Grid>
          <Grid container={true} style={gridStyle}>
            <Grid style={leftGridStyle} item xs={3}>
              <Typography style={titleStyle} sx={{ lineHeight: "56px" }}>
                Password
              </Typography>
            </Grid>
            <Grid item style={rightGridStyle} xs={9}>
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
                    InputProps={{
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
            </Grid>
          </Grid>

          <FormGroup sx={{ marginTop: "8px" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              sx={{ fontWeight: "bolder" }}
              label="Remember me?"
            />
          </FormGroup>

          <Grid container justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              size="large"
              type="submit"
              style={{
                width: "100%",
                marginTop: "8px",
                backgroundColor: "#1d5b9d",
              }}
            >
              Login
            </Button>
          </Grid>
        </form>
      </Box>
    </Grid2>
  );
};

export default LoginForm;
