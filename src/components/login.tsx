import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";

type Props = {};
const boxStyle = {
  width: 450,
  height: 400,
  margin: "0 auto",
};

const pStyle = {
  fontSize: 32,
  fontWeight: "bold",
  textAlign: "center",
  color: "#18345E",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#ffff",
  backgroundColor: "#00689B",
}));

const Login = () => {
  return (
    <Container
      sx={{
        justifyContent: "center",
      }}
    >
      <Grid style={boxStyle}>
        <img
          src={require("../assets/Huy's logo.png")}
          height={100}
          width={100}
        ></img>
        <Typography sx={{}}>Login Page</Typography>
      </Grid>
      <Grid>
        <ListItem>
          <FormControl
            id="margin-normal"
            margin="normal"
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-username">Account</InputLabel>
          </FormControl>
        </ListItem>

        <ListItem>
          <FormControl
            id="margin-normal"
            margin="normal"
            fullWidth
            variant="outlined"
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Item>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                  />
                </Item>
              </Grid>
            </Grid>
          </FormControl>
        </ListItem>

        <ListItem>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember account"
            />
          </FormGroup>
        </ListItem>
        <ListItem>
          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            style={{ marginTop: 10, color: "#1D5B9D" }}
          >
            <Typography
              sx={{
                color: "white",
              }}
            ></Typography>
          </ColorButton>
        </ListItem>
      </Grid>
    </Container>
  );
};

export default Login;

// #09319E
// #D4C608
// #AA9BAB
