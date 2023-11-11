import { yupResolver } from "@hookform/resolvers/yup";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import axios from "axios";
import ErrorMessage from "components/errors/errorMessage";
import { ROLE_ID_KEY, USERNAME, USER_ID_KEY } from "constant";
import { LoginRequest } from "interfaces/login/loginRequest";
import { useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addErrorIntoField } from "utils/utils";
import * as yup from "yup";

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
  let timeoutRef = useRef<any>();
  const navigate = useNavigate();
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
    try {
      axios
        .post("http://localhost:8080/api/login", {
          username: data.username,
          password: data.password,
        })
        .then(function (response) {
          console.log(response);
          console.log(response.data.role.id);
          if (response.data.role.id) {
            localStorage.setItem(
              USER_ID_KEY,
              JSON.stringify(response.data.user.id)
            );
            localStorage.setItem(
              ROLE_ID_KEY,
              JSON.stringify(response.data.role.id)
            );
            localStorage.setItem(USERNAME, JSON.stringify(response.data));
            switch (response.data.role.id) {
              case "1":
                navigate("/admin");
                break;
              case "2":
                navigate("/staff");
                break;

              case "7":
                navigate("/member");
                break;
              case 5:
                toast.success("Login Success!", {
                  position: toast.POSITION.TOP_CENTER,
                });
                timeoutRef.current = setTimeout(() => {
                  navigate("/dog-chat");
                }, 1700);
                return;
              default:
                console.log("Default");
            }
          }
        })
        .catch((e: any) => {
          if (e.response.status !== 200) {
            toast.error("Login Failed!", {
              position: toast.POSITION.TOP_CENTER,
            });
            console.log("Error: ", e);
          }
        });
    } catch (error) {
      console.log("Error at login Form");
    }
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
                width: "55%",
                marginTop: "8px",
                backgroundColor: "#1d5b9d",
              }}
            >
              Login
            </Button>
          </Grid>
        </form>
      </Box>
      <ToastContainer
        autoClose={2000}
        style={{ marginTop: "50px", width: "350px" }}
      />
    </Grid2>
  );
};

export default LoginForm;
