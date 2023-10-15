import { Avatar, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";

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
  return (
    <Container>
      <Grid sx={{ width: 50, position: "relative", left: 900, top: 10 }}>
        <Avatar>
          <img
            src={require("../assets/dogcat.jpg")}
            height={110}
            width={140}
          ></img>
        </Avatar>
        <Typography sx={{ fontWeight: "bold" }}>namnguyen2u3</Typography>
        <Typography sx={{ fontWeight: "bold" }}>Member</Typography>
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
          <Item>Sep 14, 2023</Item>
        </Grid>
        <Grid xs={3}>
          <Item>Full name :</Item>
        </Grid>
        <Grid xs={9}>
          <Item>Nguyen Viet Nam</Item>
        </Grid>{" "}
        <Grid xs={3}>
          <Item>
            <Typography>Email:</Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item>namnguyen1@gmail.com</Item>
        </Grid>{" "}
        <Grid xs={3}>
          <Item>
            <Typography>Date of Birth :</Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item>02/02/2002</Item>
        </Grid>{" "}
        <Grid xs={3}>
          <Item>
            <Typography>Gender :</Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item>Male</Item>
        </Grid>{" "}
      </Grid>
    </Container>
  );
};

export default Profile;
