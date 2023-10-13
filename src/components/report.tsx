import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import styled from "styled-components";

type Props = {};

const Item = styled("div")(({ theme }) => ({
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(2),
  borderRadius: "4px",
  textAlign: "center",
}));

const Report = (props: Props) => {
  const [reason, setReason] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setReason(event.target.value as string);
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography>USER REPORT</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={reason}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem>Incorrect Information</MenuItem>
            <MenuItem>Abusive Language</MenuItem>
            <MenuItem>Sensitive Content</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={5}
            defaultValue="Describe details . . ."
            variant="filled"
          />
        </div>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <Button
              variant="contained"
              sx={{
                color: "#1D5B9D",
              }}
            >
              <Typography sx={{ color: "white" }}>Save</Typography>
            </Button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Button
              variant="contained"
              sx={{
                color: "#1D5B9D",
              }}
            >
              <Typography sx={{ color: "white" }}>Cancel</Typography>
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Report;
