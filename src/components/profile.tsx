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
}));

const Profile = () => {
  let { userID } = useParams();
  const [profile, setProfile] = useState<MyProfileRequest>({
    dateJoined: "14 October 2023",
    dateOfBirth: "05/08/2003",
    email: "huylqse123456@fpt.edu.vn",
    fullName: "Le Quang Huy",
    gender: "Male",
    manage: "Dog",
    role: "Member",
    userID: "1",
    username: "huydepgai123",
  });

  return (
    <Container sx={{ backgroundColor: "F0F0F0" }}>
      <Grid sx={{ width: 50, position: "relative", left: 900, top: 10 }}>
        <Avatar
          sx={{ bgcolor: "#f44336" }}
          aria-label="recipe"
          src="https://cdn-icons-png.flaticon.com/128/706/706807.png"
        ></Avatar>
      </Grid>

      <Grid
        container
        spacing={4}
        sx={{
          paddingTop: 10,
          width: 900,
          position: "relative",
          left: 400,
          top: 10,
        }}
      >
        <Grid xs={3}>
          <Item sx={{ border: "none", textAlign: "left", paddingLeft: 6 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 17 }}>
              Joined :
            </Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item
            sx={{
              height: 35,
              width: 350,
              backgroundColor: "#F0F0F0",
              position: "relative",
              top: 4,
            }}
          >
            <Typography>{profile?.dateJoined}</Typography>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item sx={{ border: "none", textAlign: "left", paddingLeft: 6 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 17 }}>
              Full name :
            </Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item
            sx={{
              height: 35,
              width: 350,
              backgroundColor: "#F0F0F0",
              position: "relative",
              top: 4,
            }}
          >
            <Typography>{profile?.fullName}</Typography>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item sx={{ border: "none", textAlign: "left", paddingLeft: 6 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 17 }}>
              Management area :
            </Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item
            sx={{
              height: 35,
              width: 350,
              backgroundColor: "#F0F0F0",
              position: "relative",
              top: 4,
            }}
          >
            <Typography>{profile?.manage}</Typography>
          </Item>
        </Grid>

        <Grid xs={3}>
          <Item sx={{ border: "none", textAlign: "left", paddingLeft: 6 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 17 }}>
              Email:
            </Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item
            sx={{
              height: 35,
              width: 350,
              backgroundColor: "#F0F0F0",
              position: "relative",
              top: 4,
            }}
          >
            <Typography>{profile?.email}</Typography>
          </Item>
        </Grid>

        <Grid xs={3}>
          <Item sx={{ border: "none", textAlign: "left", paddingLeft: 6 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 17 }}>
              Date of Birth :
            </Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item
            sx={{
              height: 35,
              width: 350,
              backgroundColor: "#F0F0F0",
              position: "relative",
              top: 4,
            }}
          >
            <Typography>{profile?.dateOfBirth}</Typography>
          </Item>
        </Grid>

        <Grid xs={3}>
          <Item sx={{ border: "none", textAlign: "left", paddingLeft: 6 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 17 }}>
              Gender :
            </Typography>
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item
            sx={{
              height: 35,
              width: 350,
              backgroundColor: "#F0F0F0",
              position: "relative",
              top: 4,
            }}
          >
            <Typography>{profile?.gender}</Typography>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
