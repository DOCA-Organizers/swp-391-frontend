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

const Item = styled("div")({
  borderRadius: "4px",
  textAlign: "center",
});

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
          "& > :not(style)": { m: 1, width: "40ch", height: 20 },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 25,
            position: "relative",
            left: 290,
            top: 40,
          }}
        >
          USER REPORT :
        </Typography>
        <TextField
          sx={{ width: 300, position: "relative", left: 500 }}
          id="outlined-basic"
          label="Username for reporting"
          variant="outlined"
        />
      </Box>
      <Box sx={{ width: 500, position: "relative", left: 280, top: 20 }}>
        <FormControl fullWidth>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 20,
              position: "relative",
              top: 40,
            }}
          >
            Reason:
          </Typography>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={reason}
            onChange={handleChange}
            sx={{ position: "relative", left: 100 }}
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
          position: "relative",
          left: 280,
          top: 30,
          width: 300,
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Description:
          </Typography>
          <TextField
            id="filled-multiline-static"
            label=""
            multiline
            rows={5}
            defaultValue=""
            variant="filled"
            sx={{ fontWeight: "bold", width: 600 }}
          />
        </div>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ width: 300, position: "relative", left: 700, top: 60 }}
      >
        <Grid item xs={4}>
          <Item>
            <Button
              variant="contained"
              sx={{
                color: "#1D5B9D",
                width: 80,
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
                width: 80,
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
