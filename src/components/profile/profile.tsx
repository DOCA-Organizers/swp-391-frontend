import { Avatar, Container, Grid, Typography, styled } from "@mui/material";
import {
  CountResponse,
  Role,
  UserProfile,
} from "interfaces/requestInterface/request";

import { useEffect, useState } from "react";
import MyProfileAPI from "service/myProfile/myProfileAPI";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
}));

const style = {};
const Profile = () => {
  // let { userID } = useParams();
  const [profile, setProfile] = useState<UserProfile>();
  const [role, setRole] = useState<Role>();
  const [dateStart, setDateStart] = useState();
  const [count, setCount] = useState<CountResponse>();

  // Assuming you have a Date object representing the given time
  const originalDate: Date = new Date("2023-10-15T10:44:46.655+00:00");

  // Format the date for display on UI
  const formattedDate: string = originalDate.toLocaleString(); // You can customize this based on your requirements

  // Now, 'formattedDate' contains the date in a user-friendly format
  console.log(formattedDate);

  useEffect(() => {
    const getMyProfile = async () => {
      const data: any = await MyProfileAPI.getMyProfileAPI(
        "9cb04812-bc02-4a4c-b45e-501bfdaa956f"
      );
      // console.log("tU", USER_ID_KEY);

      if (data) {
        setProfile(data.user);
        setRole(data.role);
        setDateStart(data.datestart);
      }
    };
    const getPostFigure = async () => {
      const data: any = await MyProfileAPI.getCountAPI(
        "9cb04812-bc02-4a4c-b45e-501bfdaa956f"
      );

      console.log("count:", data);

      if (data) {
        setCount(data);
      }
    };
    const initUseEffect = async () => {
      await getMyProfile();
      await getPostFigure();
    };
    initUseEffect();
  }, []);
  console.log("profile:", profile);
  console.log("role:", role);
  console.log("daSta", dateStart);

  return (
    <Container sx={{ backgroundColor: "F0F0F0" }}>
      <Grid sx={{ width: 50, position: "relative", left: 900, top: 10 }}>
        <Avatar
          sx={{
            width: 85,
            height: 85,
            bgcolor: "#f44336",
            positon: "relative",
            right: 800,
            top: 100,
          }}
          aria-label="recipe"
          src="https://cdn-icons-png.flaticon.com/128/706/706807.png"
        />
        <Typography
          sx={{
            position: "relative",
            top: 105,
            right: 790,
            width: 30,
            fontWeight: "bold",
          }}
        >
          {profile?.username}
        </Typography>
        <Typography
          sx={{
            position: "relative",
            top: 105,
            right: 790,
            width: 30,
            fontWeight: "bold",
          }}
        >
          {role?.name}
        </Typography>
      </Grid>

      <Grid
        container
        spacing={4}
        sx={{
          paddingTop: 4,
          width: 900,
          position: "relative",
          left: 250,
          bottom: 20,
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
            <Typography>{dateStart}</Typography>
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
            <Typography>{role?.type}</Typography>
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
            <Typography>{profile?.dob}</Typography>
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
      <Grid sx={{ position: "relative", bottom: 200, left: 900, width: 350 }}>
        <Grid xs={9}>
          <Item
            sx={{
              height: 35,
              width: 350,

              position: "relative",
              top: 4,
            }}
          >
            <Typography
              sx={{
                position: "relative",
                left: 110,
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              ACTIVE FIGURE
            </Typography>
          </Item>
        </Grid>
        <Grid xs={9} sx={{ width: 350 }}>
          <Item
            sx={{
              height: 35,
              width: 350,
              backgroundColor: "#F0F0F0",
              position: "relative",
              top: 4,
            }}
          >
            <Typography sx={style}>
              Number of posts: {count?.numofpost}
            </Typography>
          </Item>
        </Grid>
        <Grid xs={9} sx={{ width: 350 }}>
          <Item
            sx={{
              height: 35,
              width: 350,
              backgroundColor: "#F0F0F0",
              position: "relative",
              top: 4,
            }}
          >
            <Typography sx={style}>
              Number of reactions: {count?.numofreact}
            </Typography>
          </Item>
        </Grid>
        <Grid xs={9} sx={{ width: 350 }}>
          <Item
            sx={{
              height: 35,
              width: 350,
              backgroundColor: "#F0F0F0",
              position: "relative",
              top: 4,
            }}
          >
            <Typography sx={style}>
              Number of comments: {count?.numofcomment}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
