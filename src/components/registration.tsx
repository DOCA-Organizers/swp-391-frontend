import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  useFormControl,
} from "@mui/material";
import { LoginRequest } from "interfaces/login/loginRequest";
import React from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginAPI from "./service/login/loginAPI";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const divStyle = {
  backgroundColor: "#F0F0F0",
};

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

const {
  register,
  handleSubmit,
  formState: { errors },
  control,
} = useForm<any>({
  mode: "onTouched",
  // resolver: yupResolver(validationSchema),
});

const onError = (error: any) => {
  console.log(error);
};

const onSubmit: SubmitHandler<LoginRequest> = async (params) => {
  try {
    const response = await LoginAPI.login(params);
  } catch (error) {
    console.log("Error submitting", error);
  }
};

const usernameRegExp = /^(?!.*[_.]{2})[^_.].*[^_.]$/g;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g;

const validationSchema = yup.object({
  account: yup
    .string()
    .required("Cannot empty in the Account blank!")
    .matches(usernameRegExp, "Cannot start or end with the special word"),

  password: yup
    .string()
    .required("Please, input your password!")
    .matches(
      passwordRegExp,
      "Password have al least 8 word, an uppercase, a lowercase, a digit and a special word!"
    ),

  fullName: yup.string().required("Please input your name"),

  // dateOfBirth: yup
  // .string()
  // .required("Please input your birthday"),
});

const Registration = () => {
  const [account, setaccount] = useState("");
  const [password, setpassword] = useState("");
  const [fullName, setfullName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [email, setemail] = useState("");
  const [isRemembered, setisRemembered] = useState("");

  return (
    <Container
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          paddingLeft: 50,
          position: "relative",
          left: 70,
          bottom: 30,
          height: 50,
          width: 50,
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            textDecoration: "bold",
            fontWeight: "bold",
            position: "relative",
            left: 50,
          }}
        >
          Registration
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            textDecoration: "bold",
            fontWeight: "bold",
            width: 400,
          }}
        >
          (Fill your information in the blanks)
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          position: "relative",
          left: 300,
          top: 10,
          fontWeight: "bold",
          width: 400,
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            <Typography sx={{ fontWeight: "bold" }}>Account:</Typography>
            <TextField
              id="account"
              label="Input username here"
              variant="filled"
              sx={{ width: 500, color: "#D9D9D9" }}
            />
          </div>
          <div>
            <Typography sx={{ fontWeight: "bold" }}>Password:</Typography>
            <TextField
              id="password"
              label="Input password here"
              variant="filled"
              sx={{ width: 500, color: "#D9D9D9" }}
            />
          </div>

          <div>
            <Typography sx={{ fontWeight: "bold" }}>Fullname:</Typography>
            <TextField
              id="fullName"
              label="Input fullname here"
              variant="filled"
              sx={{ width: 500, color: "#D9D9D9" }}
            />
          </div>
          <div>
            <Typography sx={{ fontWeight: "bold" }}>Date of birth:</Typography>
            <TextField
              id="dateOfBirth"
              label="Input date of birth here"
              variant="filled"
              sx={{ width: 500, color: "#D9D9D9" }}
            />
          </div>
          <div>
            <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>
            <TextField
              id="email"
              label="Input email here"
              variant="filled"
              sx={{ width: 500, color: "#D9D9D9" }}
            />
          </div>
          <Stack
            spacing={2}
            direction="row"
            sx={{ width: 200, position: "relative", top: 30, left: 300 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1D5B9D",
                width: 80,
              }}
            >
              <Typography sx={{ color: "white" }}>Save</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1D5B9D",
                width: 80,
              }}
            >
              <Typography sx={{ color: "white" }}>Cancel</Typography>
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Registration;
