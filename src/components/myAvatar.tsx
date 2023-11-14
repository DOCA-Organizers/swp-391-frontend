import { Avatar, Grid } from "@mui/material";
import { UserProfile } from "interfaces/requestInterface/request";

import { useState } from "react";

const MyAvatar = () => {
  const [profile, setProfile] = useState<UserProfile>();
  return (
    <Grid>
      <Avatar>
        <img
          src={require("../assets/Huy's logo.png")}
          height={110}
          width={140}
        ></img>
      </Avatar>
      {/* <Typography sx={{ fontWeight: "bold" }}>{profile?.username}</Typography>
      <Typography sx={{ fontWeight: "bold" }}>{profile?.role}</Typography> */}
    </Grid>
  );
};

export default MyAvatar;
