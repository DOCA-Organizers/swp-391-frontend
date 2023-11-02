import {
  Box,
  Button,
  Container,
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

import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { RegisRequest } from "interfaces/requestInterface/request";

const usernameRegExp = /^(?!.*[_.]{2})[^_.].*[^_.]$/g;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g;
const fullNameReqExp = /^(?!.*[_.]{2})[^_.].*[^_.]$/g;
const dateOfBirthReqExp =
  /^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/g;
const emailReqExp = /^(?!.*[_.]{2})[^_.].*[^_.]$/g;

const validationSchema = yup.object({
  username: yup
    .string()
    .required("Cannot empty in the Account blank!")
    .matches(usernameRegExp, "Cannot start or end with the special word"),

  password: yup
    .string()
    .required("Please, input your password!")
    .matches(
      passwordRegExp,
      "Password have at least 8 word, an uppercase, a lowercase, a digit and a special word!"
    ),

  fullName: yup
    .string()
    .required("Please input your name")
    .matches(fullNameReqExp, "Please enter your full name"),

  dateOfBirth: yup
    .string()
    .required("Please input your date of birth")
    .matches(dateOfBirthReqExp, "Date of birth fit with the concept, please"),

  email: yup
    .string()
    .required("Please input your email")
    .matches(emailReqExp, "Please input your email here"),
});

const onSubmit: SubmitHandler<RegisRequest> = async (params) => {};
const onError = (error: any) => {
  console.log(error);
};

const RegistrationForm = () => {
  const Navigate = useNavigate();
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
          left: 280,
          top: 10,
          fontWeight: "bold",
          width: 580,
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            <Typography sx={{ fontWeight: "bold" }}>Account:</Typography>

            <Controller
              name="account"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...addErrorIntoField(errors["account"])}
                  sx={{ lineHeight: "56px" }}
                  {...register("account")}
                  type="account"
                  fullWidth
                  label="Input username here"
                  variant="filled"
                />
              )}
            />
            {errors["account"] ? (
              <ErrorMessage message={errors["account"].message} />
            ) : null}
          </div>
          <div>
            <Typography sx={{ fontWeight: "bold" }}>Password:</Typography>
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
                  label="Input username here"
                  variant="filled"
                />
              )}
            />
            {errors["password"] ? (
              <ErrorMessage message={errors["password"].message} />
            ) : null}
          </div>

          <div>
            <Typography sx={{ fontWeight: "bold" }}>Fullname:</Typography>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...addErrorIntoField(errors["fullName"])}
                  sx={{ lineHeight: "56px" }}
                  {...register("fullName")}
                  type="fullName"
                  fullWidth
                  label="Input username here"
                  variant="filled"
                />
              )}
            />
            {errors["fullName"] ? (
              <ErrorMessage message={errors["fullName"].message} />
            ) : null}
          </div>
          <div>
            <Typography sx={{ fontWeight: "bold" }}>Date of birth:</Typography>
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...addErrorIntoField(errors["dateOfBirth"])}
                  sx={{ lineHeight: "56px" }}
                  {...register("dateOfBirth")}
                  type="dateOfBirth"
                  fullWidth
                  label="Input username here"
                  variant="filled"
                />
              )}
            />
            {errors["dateOfBirth"] ? (
              <ErrorMessage message={errors["dateOfBirth"].message} />
            ) : null}
          </div>
          <div>
            <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...addErrorIntoField(errors["email"])}
                  sx={{ lineHeight: "56px" }}
                  {...register("email")}
                  type="email"
                  fullWidth
                  label="Input username here"
                  variant="filled"
                />
              )}
            />
            {errors["email"] ? (
              <ErrorMessage message={errors["email"].message} />
            ) : null}
          </div>
          <Stack
            spacing={2}
            direction="row"
            sx={{ width: 200, position: "relative", top: 30, left: 400 }}
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
              onClick={() => {
                Navigate(-1);
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

export default RegistrationForm;
