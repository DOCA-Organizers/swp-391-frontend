import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import {
  Avatar,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { User } from "interfaces/user/userResponse";
import { isEmpty, size } from "lodash";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import reportPost from "service/reportPost/reportPost";
import userAPI from "service/user/userAPI";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { Male } from "@mui/icons-material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

const UserList = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const navigate = useNavigate();
  const[ban, setBan] = useState<boolean[]>([]);

  const columns: GridColDef[] = [
    {
      field: "no",
      headerName: "No",
      width: 100,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 120,
      renderCell(params) {
        if (params.row.avatar == null) {
          return <Avatar src={require("../../assets/kittyFly.png")}></Avatar>;
        } else {
          return <Avatar src={params.row.avatar}></Avatar>;
        }
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "username",
      headerName: "Username",
      width: 225,
    },

    {
      field: "fullName",
      headerName: "Full Name",
      width: 225,
    },

    {
      field: "gender",
      headerName: "Gender",
      width: 120,
      renderCell: (param) => {
        if (param.row.gender === true) {
          return <Male color="primary"></Male>;
        } else if (param.row.gender === false) {
          return <FemaleIcon color="error"></FemaleIcon>;
        }
      },
    },
    // {
    //   field: "ban",
    //   headerName: "Status",
    //   width: 120,
    //   renderCell: (param) => {
    //     if (param.row.ban === true) {
    //       return <RemoveCircleOutlineOutlinedIcon color="error"></RemoveCircleOutlineOutlinedIcon>
    //     } else if (param.row.ban === false) {
    //       return <CheckCircleOutlinedIcon color="success"></CheckCircleOutlinedIcon>
    //     }
    //   },
    // },
    {
      field: "ban",
      headerName: "Status",
      width: 120,
      renderCell: (param) => {
        if (param.row.ban == true) {
          return (
            <FormControl sx={{ height: "auto" }} size="small">
              <Select
                defaultValue={1}
              >
                <MenuItem value={1}>
                  <RemoveCircleOutlineOutlinedIcon color="error"></RemoveCircleOutlineOutlinedIcon>
                </MenuItem>
                <MenuItem value={0}>
                  <CheckCircleOutlinedIcon color="success"></CheckCircleOutlinedIcon>
                </MenuItem>
              </Select>
            </FormControl>
          );
        }else if(param.row.ban == false){
          return (
            <FormControl sx={{ height: "auto" }} size="small">
              <Select
                defaultValue={0}
              >
                <MenuItem value={1}>
                  <RemoveCircleOutlineOutlinedIcon color="error"></RemoveCircleOutlineOutlinedIcon>
                </MenuItem>
                <MenuItem value={0}>
                  <CheckCircleOutlinedIcon color="success"></CheckCircleOutlinedIcon>
                </MenuItem>
              </Select>
            </FormControl>
          );
        }
      },
    },
    // {
    //   field: "detailPost",
    //   headerName: "Detail of Post",
    //   headerClassName: "super-app-theme--header",
    //   description: "This column has a value getter and is not sortable.",

    //   sortable: false,
    //   width: 180,
    //   renderCell: (param) => {
    //     // console.log("Param: ", param.row.id);
    //     return (
    //       <Stack direction="row" spacing={1}>
    //         <Tooltip title="Click to view detail">
    //           <IconButton
    //             aria-label="update block"
    //             onClick={() => {
    //             //   console.log(param.row.categoryId);
    //               // navigate(0);
    //             }}
    //           >
    //             <VisibilitySharpIcon />
    //           </IconButton>
    //         </Tooltip>
    //       </Stack>
    //     );
    //   },
    // },
  ];

  useEffect(() => {
    const getUserList = async () => {
      const response: any = await userAPI.getUserList();
      if (response && response.length > 0) {
        let banList;
        setUserList(response);
        for (let index = 0; index < response.length; index++) {
           banList = response[index].ban;
            console.log(banList)
        }
        for (let index = 0; index < banList.length; index++) {
          setBan(banList[index])  
         }
      }
    };
    const initUseEffect = async () => {
      await getUserList();
    };
    initUseEffect();
  }, []);
  console.log("User List", userList);
  console.log(ban);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          marginRight: 6,
          marginTop: 4,
        }}
        rows={userList.map((user, index) => {
          return { no: index + 1, ...user };
        })}
        getRowId={(row) => row.id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default UserList;
