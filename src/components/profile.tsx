import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Container,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import axios from "axios";
import { MyProfileRequest } from "interfaces/myprofile/myProfileRequest";

import { SubmitHandler, Controller, useForm } from "react-hook-form";
import { addErrorIntoField } from "utils/utils";
import ErrorMessage from "./errors/errorMessage";

type Props = {};

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

const Profile = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<any>({
    mode: "onTouched",
  });

  const onError = (error: any) => {
    console.log(error);
  };

  const onSubmit: SubmitHandler<MyProfileRequest> = async (params) => {
    try {
      axios
        .post("api/myprofile/", {
          username: params.username,
          role: params.role,
          manage: params.manage,
          dateJoined: params.dateJoined,
          fullName: params.fullName,
          email: params.email,
          dateOfBirth: params.dateOfBirth,
          gender: params.gender,
        })
        .then(function (response) {
          if (response.data) {
            console.log(response.data.role.id);
            switch (response.data.role.id) {
              case 1:
                //Navigate("/admin");
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
    <Container sx={{ backgroundColor: "F0F0F0" }}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Grid sx={{ width: 50, position: "relative", left: 900, top: 10 }}>
          <Avatar>
            <img
              src={require("../assets/dogcat.jpg")}
              height={110}
              width={140}
            ></img>
          </Avatar>

          <Typography sx={{ fontWeight: "bold" }}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...addErrorIntoField(errors["username"])}
                  sx={{ lineHeight: "56px" }}
                  {...register("username")}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              )}
            />
            {errors["username"] ? (
              <ErrorMessage message={errors["username"].message} />
            ) : null}
          </Typography>

          <Typography sx={{ fontWeight: "bold" }}>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...addErrorIntoField(errors["role"])}
                  sx={{ lineHeight: "56px" }}
                  {...register("role")}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              )}
            />
            {errors["role"] ? (
              <ErrorMessage message={errors["role"].message} />
            ) : null}
          </Typography>
        </Grid>

        <Grid
          container
          spacing={4}
          sx={{ paddingTop: 10, width: 900, position: "relative", left: 170 }}
        >
          <Grid xs={3} sx={{}}>
            <Item>
              <Typography>Joined :</Typography>
            </Item>
          </Grid>
          <Grid xs={9}>
            <Item>
              <Controller
                name="dateJoined"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors["dateJoined"])}
                    sx={{ lineHeight: "56px" }}
                    {...register("dateJoined")}
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                  />
                )}
              />
              {errors["dateJoined"] ? (
                <ErrorMessage message={errors["dateJoined"].message} />
              ) : null}
            </Item>
          </Grid>
          <Grid xs={3}>
            <Item>Full name :</Item>
          </Grid>
          <Grid xs={9}>
            <Item>
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors["fullName"])}
                    sx={{ lineHeight: "56px" }}
                    {...register("fullName")}
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                  />
                )}
              />
              {errors["fullName"] ? (
                <ErrorMessage message={errors["fullName"].message} />
              ) : null}
            </Item>
          </Grid>
          <Grid xs={3}>
            <Item>Management area :</Item>
          </Grid>
          <Grid xs={9}>
            <Item>
              <Controller
                name="manage"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors["manage"])}
                    sx={{ lineHeight: "56px" }}
                    {...register("manage")}
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                  />
                )}
              />
              {errors["manage"] ? (
                <ErrorMessage message={errors["manage"].message} />
              ) : null}
            </Item>
          </Grid>

          <Grid xs={3}>
            <Item>
              <Typography>Email:</Typography>
            </Item>
          </Grid>
          <Grid xs={9}>
            <Item>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors["email"])}
                    sx={{ lineHeight: "56px" }}
                    {...register("email")}
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                  />
                )}
              />
              {errors["email"] ? (
                <ErrorMessage message={errors["email"].message} />
              ) : null}
            </Item>
          </Grid>

          <Grid xs={3}>
            <Item>
              <Typography>Date of Birth :</Typography>
            </Item>
          </Grid>
          <Grid xs={9}>
            <Item>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors["dateOfBirth"])}
                    sx={{ lineHeight: "56px" }}
                    {...register("dateOfBirth")}
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                  />
                )}
              />
              {errors["dateOfBirth"] ? (
                <ErrorMessage message={errors["dateOfBirth"].message} />
              ) : null}
            </Item>
          </Grid>

          <Grid xs={3}>
            <Item>
              <Typography>Gender :</Typography>
            </Item>
          </Grid>
          <Grid xs={9}>
            <Item>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors["gender"])}
                    sx={{ lineHeight: "56px" }}
                    {...register("gender")}
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                  />
                )}
              />
              {errors["gender"] ? (
                <ErrorMessage message={errors["gender"].message} />
              ) : null}
            </Item>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Profile;
