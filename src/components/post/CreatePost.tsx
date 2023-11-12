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
import { POST_ID_KEY, USER_KEY } from "constant";
import { Listpostimg, PostRequest } from "interfaces/post/postRequest";
import { SubmitHandler, useForm } from "react-hook-form";
import ImageUploading, { ImageListType } from "react-images-uploading";
import "./CreatePost.css";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";


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
  const userObj = JSON.parse(localStorage.getItem(USER_KEY)!);
  const { categoryID } = useParams();
  const [category, setCategory] = useState(0);
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  let timeoutRef = useRef<any>();
  const navigate = useNavigate();
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

  const onChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const handleRadio = (event: any) => {
    const parsePostCategoryToInt = parseInt(event.target.value);
    setCategory(parsePostCategoryToInt);
    console.log(category);
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
      let parseCategoryIdToInt: number = parseInt(categoryID!);
      let objList: Listpostimg[] = [];
      images.map((item) => {
        let imageObj: Listpostimg = {
          img: item.data_url,
          description: "",
        };
        objList.push(imageObj);
      });
      const response: any = await postAPI.createPost({
        userid: userObj.user.id,
        categoryid: parseCategoryIdToInt,
        pet_breed: breed,
        pet_type: type,
        content: data.content,
        exchange: category ? true : false,
        listpostimg: objList,
        listpet: null,
        listitem: null,
      });
      if (response === true) {
        toast.success("Create New Post Success!", {
          position: toast.POSITION.TOP_CENTER,
        });
        timeoutRef.current = setTimeout(() => {
          navigate(0);
        }, 1700);
        return;
      }
      toast.error("Create New Post Success!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

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
                  <Button
                    startIcon={<CloudUploadOutlinedIcon />}
                    variant="contained"
                    style={isDragging ? { color: "red" } : undefined}
                    sx={{fontSize: "10px", fontWeight: "bolder"}}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Add Image
                  </Button>
                  &nbsp;
                  <Button variant="outlined" sx={{fontSize: "10px", fontWeight: "bolder"}} onClick={onImageRemoveAll}>
                    Remove all images
                  </Button>
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
      <ToastContainer
        autoClose={2000}
        style={{ marginTop: "50px", width: "350px" }}
      />
    </Card>
  );
}
