import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  inputClasses,
} from "@mui/material";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import breedAPI from "services/breed/breedAPI";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CreatePost() {
  const [value, setValue] = useState("Post");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [breedList, setBreedList] = useState<any[]>([]);
  const [dataBreed, setDataBreed] = useState<any[]>([]);

  useEffect(() => {
    const getBreedList = async () => {
      const data: any = await breedAPI.getBreedList();
      // Nếu trả về object thì chỉ cần check có không
      if (data.length > 0) {
        setBreedList(data);
      }
    };

    const initUseEffect = async () => {
      await getBreedList();
    };

    initUseEffect();
  }, []);

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleType = (event: SelectChangeEvent) => {
    let breeds: any[] = [];
    setType(event.target.value as string);

    breedList.map((breed: any) => {
      if (breed.type === (event.target.value as string)) {
        breeds.push(breed);
        setDataBreed(breeds);
      }
    });
  };

  console.log("Data Breed: ", dataBreed);
  const handleBreed = (event: SelectChangeEvent) => {
    setBreed(event.target.value as string);
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 500px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 3;
    border-radius: 20px 20px 0 20px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  


    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Card
      sx={{
        height: 300,
        width: 650,
        borderRadius: "20px",
        marginBottom: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Avatar
          sx={{ bgcolor: red[500], marginLeft: 2, marginRight: 2 }}
          aria-label="recipe"
          src="https://cdn-icons-png.flaticon.com/128/706/706807.png"
        ></Avatar>
        <Textarea
          aria-label="empty textarea"
          placeholder="Hello, What's on your mind"
        />
        <Button
          sx={{
            borderRadius: "20px",
            marginRight: 2,
            marginLeft: 2,
            height: 50,
          }}
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Image
          <VisuallyHiddenInput type="file" />
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <FormControl>
          <FormLabel id="category_post">Category Post</FormLabel>
          <RadioGroup
            aria-labelledby="category_post"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleRadio}
          >
            <FormControlLabel value="Post" control={<Radio />} label="Post" />
            <FormControlLabel
              value="Exchange"
              control={<Radio />}
              label="Exchange"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ width: "20%" }}>
          <InputLabel id="select_type_pet">Type</InputLabel>
          <Select
            labelId="select_type_pet"
            id="select_type_pet"
            value={type}
            label="Type"
            autoWidth
            onChange={handleType}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="dog">Dog</MenuItem>
            <MenuItem value="cat">Cat</MenuItem>
          </Select>
        </FormControl>
        {type ? (
          <FormControl sx={{ width: "20%", marginLeft: "8px" }}>
            <InputLabel id="select_breed">Breed</InputLabel>
            <Select
              labelId="select_breed"
              id="select_breed"
              value={breed}
              label="Breed"
              autoWidth
              onChange={handleBreed}
            >
              <MenuItem value="">None</MenuItem>
              {dataBreed.map((item: any) => {
                return (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        ) : (
          <FormControl sx={{ width: "20%", marginLeft: "8px" }} disabled>
            <InputLabel id="select_breed">Breed</InputLabel>
            <Select
              labelId="select_breed"
              id="select_breed"
              value={breed}
              label="Breed"
              autoWidth
              onChange={handleBreed}
            >
              <MenuItem value={"dog"}>Dog</MenuItem>
              <MenuItem value={"cat"}>Cat</MenuItem>
            </Select>
          </FormControl>
        )}

        <Button
          variant="contained"
          disabled={false}
          sx={{ height: 50, width: 100 }}
        >
          Post
        </Button>
      </Box>
    </Card>
    // <Card
    //   sx={{
    //     maxWidth: 650,
    //     maxHeight: 800,
    //     backgroundColor: "white",
    //     borderRadius: "20px",
    //   }}
    // >
    //   <CardHeader
    //     sx={{ color: "#F9AC33" }}
    //     avatar={
    //       <Avatar
    //         sx={{ bgcolor: red[500] }}
    //         aria-label="recipe"
    //         src="https://cdn-icons-png.flaticon.com/128/706/706807.png"
    //       ></Avatar>
    //     }
    //     action={
    //       <IconButton aria-label="back">
    //         <BackspaceOutlinedIcon />
    //       </IconButton>
    //     }
    //     title="Shrimp and Chorizo Paella"
    //   />
    //   <Box sx={{ width: "100%" }}>
    //     <FormControl>
    //       <FormLabel id="category_post">Category Post</FormLabel>
    //       <RadioGroup
    //         aria-labelledby="category_post"
    //         name="controlled-radio-buttons-group"
    //         value={value}
    //         onChange={handleRadio}
    //       >
    //         <FormControlLabel value="Post" control={<Radio />} label="Post" />
    //         <FormControlLabel
    //           value="Exchange"
    //           control={<Radio />}
    //           label="Exchange"
    //         />
    //       </RadioGroup>
    //     </FormControl>

    //     <FormControl sx={{ width: "20%" }}>
    //       <InputLabel id="select_type_pet">Type</InputLabel>
    //       <Select
    //         labelId="select_type_pet"
    //         id="select_type_pet"
    //         value={type}
    //         label="Type"
    //         autoWidth
    //         onChange={handleType}
    //       >
    //         <MenuItem value="">None</MenuItem>
    //         <MenuItem value="dog">Dog</MenuItem>
    //         <MenuItem value="cat">Cat</MenuItem>
    //       </Select>
    //     </FormControl>

    //     {type ? (
    //       <FormControl sx={{ width: "20%", marginLeft: "8px" }}>
    //         <InputLabel id="select_breed">Breed</InputLabel>
    //         <Select
    //           labelId="select_breed"
    //           id="select_breed"
    //           value={breed}
    //           label="Breed"
    //           autoWidth
    //           onChange={handleBreed}
    //         >
    //           <MenuItem value="">None</MenuItem>
    //           {dataBreed.map((item: any) => {
    //             return (
    //               <MenuItem key={item.id} value={item.id}>
    //                 {item.name}
    //               </MenuItem>
    //             );
    //           })}
    //         </Select>
    //         <FormHelperText>Select type pet first</FormHelperText>
    //       </FormControl>
    //     ) : (
    //       <FormControl sx={{ width: "20%", marginLeft: "8px" }} disabled>
    //         <InputLabel id="select_breed">Breed</InputLabel>
    //         <Select
    //           labelId="select_breed"
    //           id="select_breed"
    //           value={breed}
    //           label="Breed"
    //           autoWidth
    //           onChange={handleBreed}
    //         >
    //           <MenuItem value={"dog"}>Dog</MenuItem>
    //           <MenuItem value={"cat"}>Cat</MenuItem>
    //         </Select>
    //         <FormHelperText>Select type pet first</FormHelperText>
    //       </FormControl>
    //     )}
    //   </Box>
    //   <CardMedia
    //     component="img"
    //     height="50px"
    //     image="https://icons8.com/icon/116727/photo-gallery"
    //     alt="Add your pictures"
    //   />
    //   <CardContent sx={{ height: "200px" }}>
    //     <TextField fullWidth multiline={true}  id="caption"
    //       placeholder="Hello, What do you think today"
    //       sx={{height: "100%"}}
    //     />
    //   </CardContent>
    //   <CardActions sx={{ display: "flex", justifyContent: "center" }}>
    //     <Button variant="contained" disabled={false}>
    //       Post
    //     </Button>
    //   </CardActions>
    // </Card>
  );
}
