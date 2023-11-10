import Box from "@mui/material/Box";

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { AccountRequest } from "interfaces/requestInterface/request";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { addErrorIntoField } from "../../utils/utils";
import ErrorMessage from "../errors/errorMessage";

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
  width: 600,
};

const boxStyle = {
  width: 200,
  height: 100,
  margin: "0 auto",
  paddingRight: 750,
};

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

const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<any>({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const onError = (error: any) => {
    console.log(error);
  };

  const onSubmit: SubmitHandler<AccountRequest> = async (params) => {
    try {
      axios
        .post("api/login", {
          headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
          username: params.username,
          password: params.password,
        })
        .then(function (response) {
          response;
          console.log(response);
          if (response.data) {
            console.log(response.data.username);
            switch (response.data.role.id) {
              case 5:
                console.log("Đăng nhập thành công");

                break;
              default:
                console.log("Default");
            }
          }
        })
        .catch(function (e) {
          console.log(e);
        });
    } catch (error) {
      console.log("Error submitting", error);
    }
  };

  return (
    <Box
      style={{
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "30px",
            textDecoration: "bold",
            fontWeight: "bold",
            left: 530,
          }}
        >
          Login Page
        </Typography>
      </Grid>

      <Box p={3} sx={{ flexGrow: 1, left: 230, width: 500 }}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          {/* Account */}
          <Grid container={true} style={gridStyle}>
            <Grid style={leftGridStyle} item xs={2}>
              <Typography style={titleStyle} sx={{ lineHeight: "56px" }}>
                Account
              </Typography>
            </Grid>
            <Grid
              item
              style={rightGridStyle}
              xs={10}
              sx={{ position: "relative" }}
            >
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors["username"])}
                    sx={{ lineHeight: "56px" }}
                    {...register("username")}
                    type="text"
                    fullWidth
                  />
                )}
              />
              {errors["username"] ? (
                <ErrorMessage message={errors["username"].message} />
              ) : null}
            </Grid>
          </Grid>

          {/*  Password */}
          <Grid container={true} style={gridStyle}>
            <Grid style={leftGridStyle} item xs={2}>
              <Typography style={titleStyle} sx={{ lineHeight: "56px" }}>
                Password
              </Typography>
            </Grid>
            <Grid item style={rightGridStyle} xs={10}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors["password"])}
                    sx={{ lineHeight: "56px" }}
                    {...register("password")}
                    type="password"
                    fullWidth
                  />
                )}
              />
              {errors["password"] ? (
                <ErrorMessage message={errors["password"].message} />
              ) : null}
            </Grid>
          </Grid>

          <Grid>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember account"
              />
            </FormGroup>
          </Grid>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "0 20px", position: "relative", left: 300, top: 15 }}
          >
            <Button
              variant="contained"
              size="large"
              type="submit"
              style={{ width: "30%", backgroundColor: "#1D5B9D" }}
            >
              Login
            </Button>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Login;

// #09319E
// #D4C608
// #AA9BAB
