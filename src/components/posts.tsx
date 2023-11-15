import { Avatar, Box } from "@mui/material";
import { UserProfile } from "interfaces/requestInterface/request";
import { useEffect, useState } from "react";
import MyProfileAPI from "service/myProfile/myProfileAPI";

const listItemButtonStyles = {
  backgroundColor: "#F0F0F0",
  width: 650,
  position: "relative",
  height: 45,
  border: "3px solid",
  borderColor: "white",
  borderRadius: "16px",
  "&:hover": {
    backgroundColor: "#dbdbdb",
  },
};

const styled = {
  color: "black",
  borderRadius: "10px",
  fontWeight: "bold",
  backgroundColor: "#ffffff",
  padding: "8px",
  width: "1400px",
  height: 100,
  marginTop: 5,
};
const Posts = () => {
  const [profile, setProfile] = useState<UserProfile[]>([]);
  useEffect(() => {
    const getMyProfile = async () => {
      const data: any = await MyProfileAPI.getMyProfileAPI(
        "9cb04812-bc02-4a4c-b45e-501bfdaa956f"
      );
      console.log(data);
      if (data) {
        setProfile(data.user);
      }
    };

    const getPost = async () => {
      const data: any = await MyProfileAPI.getMyProfileAPI(
        "9cb04812-bc02-4a4c-b45e-501bfdaa956f"
      );
      console.log(data);
      if (data) {
        setProfile(data.user);
      }
    };

    const initUseEffect = async () => {
      await getMyProfile();
      await getPost();
    };
    initUseEffect();
  });
  return (
    <Box sx={styled}>
      <Avatar
        sx={{ marginLeft: 10 }}
        src="https://cdn-icons-png.flaticon.com/128/706/706807.png"
      />
    </Box>
  );
};

export default Posts;
