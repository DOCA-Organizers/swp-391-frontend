import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  useFormControl,
} from "@mui/material";
import React from "react";
import { useState } from "react";

type Props = {};

const divStyle = {
  backgroundColor: "#F0F0F0",
};

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

const Registration = () => {
  const [account, setaccount] = useState("");
  const [password, setpassword] = useState("");
  const [fullName, setfullName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [email, setemail] = useState("");
  const [isRemembered, setisRemembered] = useState("");

  return (
    <Container
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          "& > *": {
            minWidth: 130,
            flexBasis: 800,
            minHeight: 100,
            paddingLeft: 20,
            paddingTop: 1,
            paddingBottom: 1,
            position: "relative",
            left: 30,
          },
        }}
      >
        <img
          src={require("../assets/Huy's logo.png")}
          height={100}
          width={100}
        ></img>
      </Box>
      <Box
        sx={{
          paddingLeft: 50,
          position: "relative",
          left: 70,
          bottom: 30,
          height: 50,
          width: 50,
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            textDecoration: "bold",
            fontWeight: "bold",
            position: "relative",
            left: 70,
          }}
        >
          Registration
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            textDecoration: "bold",
            fontWeight: "bold",
            width: 400,
          }}
        >
          (Fill your information in the blanks)
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          position: "relative",
          left: 300,
          top: 20,
          fontWeight: "bold",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <Typography sx={{ fontWeight: "bold" }}>Account:</Typography>
          <TextField
            id="account"
            label="Input username here"
            variant="filled"
            sx={{ width: 500, color: "#D9D9D9" }}
          />
        </div>
        <div>
          <Typography sx={{ fontWeight: "bold" }}>Password:</Typography>
          <TextField
            id="password"
            label="Input password here"
            variant="filled"
            sx={{ width: 500, color: "#D9D9D9" }}
          />
        </div>

        <div>
          <Typography sx={{ fontWeight: "bold" }}>Fullname:</Typography>
          <TextField
            id="fullName"
            label="Input fullname here"
            variant="filled"
            sx={{ width: 500, color: "#D9D9D9" }}
          />
        </div>
        <div>
          <Typography sx={{ fontWeight: "bold" }}>Date of birth:</Typography>
          <TextField
            id="dateOfBirth"
            label="Input date of birth here"
            variant="filled"
            sx={{ width: 500, color: "#D9D9D9" }}
          />
        </div>
        <div>
          <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>
          <TextField
            id="email"
            label="Input email here"
            variant="filled"
            sx={{ width: 500, color: "#D9D9D9" }}
          />
        </div>
        <Stack
          spacing={2}
          direction="row"
          sx={{ width: 200, position: "relative", top: 30, left: 300 }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#1D5B9D",
              width: 80,
            }}
          >
            <Typography sx={{ color: "white" }}>Save</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#1D5B9D",
              width: 80,
            }}
          >
            <Typography sx={{ color: "white" }}>Cancel</Typography>
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Registration;
