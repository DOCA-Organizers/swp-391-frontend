import {
  Avatar,
  Container,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { MyProfileRequest } from "interfaces/requestInterface/request";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

const Profile = () => {
  let { userID } = useParams();
  const [profile, setProfile] = useState<MyProfileRequest>();

  return (
    <Container sx={{ backgroundColor: "F0F0F0" }}>
      <Grid sx={{ width: 50, position: "relative", left: 900, top: 10 }}>
        <Avatar>
          <img
            src={require("../assets/dogcat.jpg")}
            height={110}
            width={140}
          ></img>
        </Avatar>
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
            <Typography>{profile?.dateJoined}</Typography>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item>Full name :</Item>
        </Grid>
        <Grid xs={9}>
          <Item>
            <Typography>{profile?.fullName}</Typography>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item>Management area :</Item>
        </Grid>
        <Grid xs={9}>
          <Item>
            <Typography>{profile?.manage}</Typography>
          </Item>
        </Grid>

        <Grid xs={3}>
          <Item>
            <Typography>Email:</Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item>
            <Typography>{profile?.email}</Typography>
          </Item>
        </Grid>

        <Grid xs={3}>
          <Item>
            <Typography>Date of Birth :</Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item>
            <Typography>{profile?.dateOfBirth}</Typography>
          </Item>
        </Grid>

        <Grid xs={3}>
          <Item>
            <Typography>Gender :</Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item>
            <Typography>{profile?.gender}</Typography>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
