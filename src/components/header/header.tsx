import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

const buttonStyles = {
  borderRadius: "32px",
  fontWeight: "bolder",
  width: "100px",
};
const Header = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="4px solid"
      borderColor="#1D5B9D"
    >
      <Grid xs={4} alignContent="center" pl={2}>
        <img
          src={require("../../assets/Huy's logo.png")}
          height={110}
          width={140}
        />
      </Grid>
      <Grid xs={4} textAlign="end" pr={2}>
        <Button
          variant="contained"
          sx={{ marginRight: "8px" }}
          style={buttonStyles}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>

        <Button
          variant="outlined"
          style={buttonStyles}
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
