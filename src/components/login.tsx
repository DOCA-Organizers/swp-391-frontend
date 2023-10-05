import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  FormGroup,
  Grid,
  InputLabel,
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

const itemData = {
  img: "D:SWP391DOCA_Projectswp391-frontendsrcassetsHuy's logo.png",
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#ffff",
  backgroundColor: "#00689B",
}));

const Login = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ height: "800", width: "50%" }}
    >
      <Box style={boxStyle}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <img src="D:\SWP391\DOCA_Project\swp391-frontend\src\assets\Huy's logo.png"></img>
          <Typography >Login Page</Typography>
          <FormControl
            id="margin-normal"
            margin="normal"
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-username">Account</InputLabel>
            <ControlPointDuplicateRounded
              name="username"
              control={control}
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  {...addErrorIntoField(errors["username"])}
                  errors={errors}
                  id="outlined outlined-username"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  }
                  label="Số Điện Thoại"
                />
              )}
            />
            {errors["username"] ? (
              <ErrorMessage message={errors["username"].message} />
            ) : null}
          </FormControl>

          <FormControl
            id="margin-normal"
            margin="normal"
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  {...addErrorIntoField(errors["password"])}
                  errors={errors}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Mật khẩu"
                />
              )}
            />
            {errors["password"] ? (
              <ErrorMessage message={errors["password"].message} />
            ) : null}
          </FormControl>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Lưu Đăng Nhập"
            />
          </FormGroup>

          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            style={{ marginTop: 10 }}
          >
            Login
          </ColorButton>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
