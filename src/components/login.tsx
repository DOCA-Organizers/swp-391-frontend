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
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";

type Props = {};
const boxStyle = {
  width: 200,
  height: 125,
  margin: "0 auto",
  paddingRight: 800,
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
        position: "relative",
        left: 65,
      }}
    >
      <Grid style={boxStyle}>
        <img
          src={require("../assets/Huy's logo.png")}
          height={110}
          width={140}
        ></img>
      </Grid>
      <Grid
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
          }}
        >
          Login Page
        </Typography>
      </Grid>

      <List
        sx={{
          position: "relative",
          left: 200,
          top: 50,
        }}
      >
        <ListItem>
          <FormControl
            id="margin-normal"
            margin="normal"
            fullWidth
            variant="outlined"
          >
            <Grid container spacing={7}>
              <Grid item xs={2}>
                <Item>
                  <Typography>Account :</Typography>
                </Item>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  position: "relative",
                  bottom: 15,
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Input your account"
                  variant="standard"
                  sx={{ width: 400 }}
                />
              </Grid>
            </Grid>
          </FormControl>
        </ListItem>

        <ListItem>
          <FormControl
            id="margin-normal"
            margin="normal"
            fullWidth
            variant="outlined"
            sx={{ height: 20 }}
          >
            <Grid container spacing={7}>
              <Grid item xs={2}>
                <Item>
                  <Typography>Password :</Typography>
                </Item>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  position: "relative",
                  bottom: 15,
                  height: 50,
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Input your password"
                  variant="standard"
                  sx={{ width: 400 }}
                />
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
        <ListItem
          sx={{
            position: "relative",
            left: 500,
          }}
        >
          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            style={{
              marginTop: 10,
              maxHeight: 100,
              maxWidth: 100,
              color: "#1D5B9D",
            }}
          >
            <Typography sx={{ color: "white" }}>Login</Typography>
          </ColorButton>
        </ListItem>
      </List>
    </Container>
  );
};

export default Login;

// #09319E
// #D4C608
// #AA9BAB
