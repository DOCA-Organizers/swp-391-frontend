import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { SetStateAction, useEffect, useRef, useState } from "react";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./CreatePost.css";
import { Blob } from "buffer";
import postAPI from "service/post/postAPI";
import axios from "axios";
import { POST_ID_KEY } from "constant";
import { PostRequest } from "interfaces/post/postRequest";
import { IState as Props } from "pages/docaPage";
import { SubmitHandler, useForm } from "react-hook-form";
import ImageUploading, { ImageListType } from "react-images-uploading";
import "./CreatePost.css";

interface Iprops {
  inforPost: Props["inforPost"];
  setInforPost: React.Dispatch<React.SetStateAction<Props["inforPost"]>>;
}

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

export default function CreatePost({ inforPost, setInforPost }: Iprops) {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState();
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [breedList, setBreedList] = useState<any[]>([
    {
      type: "Dog",
      name: "Corgi",
      id: "1",
    },
    {
      type: "Dog",
      name: "Husky",
      id: "2",
    },
    {
      type: "Dog",
      name: "Alaska",
      id: "3",
    },
    {
      type: "Dog",
      name: "Poodle",
      id: "4",
    },
    {
      type: "Dog",
      name: "Pug",
      id: "5",
    },
    {
      type: "Dog",
      name: "Other",
      id: "6",
    },
    {
      type: "Cat",
      name: "Tabby",
      id: "7",
    },
    {
      type: "Cat",
      name: "Calico",
      id: "8",
    },
    {
      type: "Cat",
      name: "Snowshoe",
      id: "9",
    },
    {
      type: "Cat",
      name: "Xiamese",
      id: "10",
    },
    {
      type: "Cat",
      name: "Balinese",
      id: "11",
    },
    {
      type: "Cat",
      name: "Munchkin",
      id: "12",
    },
    {
      type: "Cat",
      name: "Other",
      id: "13",
    },
  ]);
  const [dataBreed, setDataBreed] = useState<any[]>([]);
  const [images, setImages] = useState<ImageListType>([]);
  const maxNumber = 69;

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setCategory((event.target as HTMLInputElement).value);
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

  const handleBreed = (event: SelectChangeEvent) => {
    setBreed(event.target.value as string);
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<PostRequest>({
    mode: "onTouched",
  });

  const onError = (error: any) => {
    console.log(error);
  };

  const onSubmit: SubmitHandler<PostRequest> = async (data: any) => {
    try {
      axios
        .post("http://localhost:8080/api/CreatePost", {
          userid: "bd35171b-2654-4c95-a8ca-0c7225e5d684",
          categoryid: "1",
          pet_breed: breed,
          pet_type: type,
          isCreateHag: true,
          content: data.content,
          title: "",
          exchange: category,
          listpostimg: null,
          listpet: null,
          listitem: null,
        })
        .then((response) => {
          console.log("Response: ", response);
          localStorage.setItem(POST_ID_KEY, JSON.stringify(response.data));
        })
        .catch((e) => {
          console.log("Error: ", e);
        });
    } catch (error) {
      console.log("Error", error);
    }
  };

  // const handlePost = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   setInforPost([
  //     ...inforPost,
  //     {
  //       content: content,
  //       imageList: images,
  //       categoryPost: category,
  //       typePet: type,
  //       breedPet: breed,
  //     },
  //   ]);
  //   alert("Post successfully");
  //   setContent("");
  //   setImages([]);
  //   setCategory("");
  //   setType("");
  //   setBreed("");
  // };


  return (
    <Card
      sx={{
        width: 650,
        borderRadius: "20px",
        margin: "0 auto",
        marginBottom: "8px",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Avatar
            sx={{ bgcolor: red[500], marginLeft: 2, marginRight: 2 }}
            aria-label="recipe"
            src="https://cdn-icons-png.flaticon.com/128/706/706807.png"
          ></Avatar>
          <TextField
            className="inputContent"
            placeholder="Hello, What's on your mind"
            id="content-post"
            required={true}
            multiline
            {...register("content")}
          />
          <Box>
            <ImageUploading
              multiple
              value={images}
              onChange={onChangeImage}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    className="btn btn4"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                  <button className="btn btn4" onClick={onImageRemoveAll}>
                    Remove all images
                  </button>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button
                          className="btn btn4"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn4"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </Box>
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
              value={category}
              onChange={handleRadio}
            >
              <FormControlLabel value={0} control={<Radio />} label="Post" />
              <FormControlLabel
                value={1}
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
              <MenuItem value="Dog">Dog</MenuItem>
              <MenuItem value="Cat">Cat</MenuItem>
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
                {dataBreed.map((item: any) => {
                  return (
                    <MenuItem key={item.id} value={item.name}>
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
            type="submit"
            sx={{ height: 50, width: 100 }}
          >
            Post
          </Button>
        </Box>
      </form>
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
