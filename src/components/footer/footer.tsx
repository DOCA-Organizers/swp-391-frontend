import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1d5b9d",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bolder",
                color: "#ffffff",
              }}
              gutterBottom
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
              }}
            >
              This is a forum built for the dog and cat owner community. This is a civilized forum and no toxicity is allowed. We call for protection of dogs and cats.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bolder",
                color: "#ffffff",
              }}
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
              }}
            >
              <b>Address: </b>16 Le Trong Tan Street, Tay Thanh, Tan Phu, Ho Chi
              Minh.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
              }}
            >
              <b>Email:</b> docaforums@gmail.com
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
              }}
            >
              <b>Phone:</b> (+84) 7982 8849 - Mr. Huy
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bolder",
                color: "#ffffff",
              }}
              gutterBottom
            >
              FAQ
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
              }}
            >
              FAQ
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bolder",
              color: "#ffffff",
            }}
            align="center"
          >
            {"Copyright © "}
            <Link color="inherit" href="#">
              Doca Forum
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
