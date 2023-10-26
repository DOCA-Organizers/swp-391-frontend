import { Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const boxStyle = {
  width: 200,
  height: 100,
  margin: "0 auto",
  paddingRight: 750,
};

const Header = () => {
  return (
    <Grid>
      <Grid style={boxStyle}>
        <img
          src={require("../../assets/Huy's logo.png")}
          height={110}
          width={140}
        />

        <NavLink
          to="login"
          style={{
            textDecoration: "none",
            color: "inherit",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: 100,
              position: "relative",
              left: 550,
              bottom: 85,
              borderRadius: 100,
              backgroundColor: "#1D5B9D",
              color: "white",
              // fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </NavLink>

        <NavLink
          to="register"
          style={{
            textDecoration: "none",
            color: "inherit",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: 100,
              position: "relative",
              left: 650,
              bottom: 85,
              borderRadius: 100,
              backgroundColor: "#1D5B9D",
              color: "white",
              // fontWeight: "bold",
            }}
          >
            Register
          </Button>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Header;
