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
          }}
        >
          (Fill your information in the blanks)
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
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
            id="filled-basic"
            label="Input username here"
            variant="filled"
            sx={{ width: 500, color: "#D9D9D9" }}
          />
        </div>
        <div>
          <Typography sx={{ fontWeight: "bold" }}>Password:</Typography>
          <TextField
            id="filled-basic"
            label="Input password here"
            variant="filled"
            sx={{ width: 500, color: "#D9D9D9" }}
          />
        </div>
        <div>
          <Typography sx={{ fontWeight: "bold" }}>Fullname:</Typography>
          <TextField
            id="filled-basic"
            label="Input fullname here"
            variant="filled"
            sx={{ width: 500, color: "#D9D9D9" }}
          />
        </div>
        <div>
          <Typography sx={{ fontWeight: "bold" }}>Date of birth:</Typography>
          <TextField
            id="filled-basic"
            label="Input date of birth here"
            variant="filled"
            sx={{ width: 500, color: "#D9D9D9" }}
          />
        </div>
        <div>
          <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>
          <TextField
            id="filled-basic"
            label="Input email here"
            variant="filled"
            sx={{ width: 500, color: "#D9D9D9" }}
          />
        </div>
        <Stack
          spacing={2}
          direction="row"
          sx={{ position: "relative", top: 30 }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#1D5B9D",
            }}
          >
            <Typography sx={{ color: "white" }}>Save</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#1D5B9D",
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