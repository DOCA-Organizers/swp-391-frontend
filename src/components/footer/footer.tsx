import { Box, Grid, Link, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1d5b9d",
        p: 6,
      }}
    >
      <Grid container direction="row" justifyContent="space-between">
        <Grid item xs={3}>
          <img
            alt="Logo"
            width="250px"
            height="160px"
            src={require("../../assets/Huy's logo.png")}
          />
          <Typography variant="h5" fontWeight="bolder" color="white">
            DOCA Dog Cat Forum
          </Typography>
        </Grid>
        <Grid item xs={2}>
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
            This is a forum built for the dog and cat owner community. This is a
            civilized forum and no toxicity is allowed. We call for protection
            of dogs and cats.
          </Typography>
        </Grid>
        <Grid item xs={2}>
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
        <Grid item xs={2}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bolder",
              color: "#ffffff",
            }}
            gutterBottom
          >
            FAQs
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#ffffff",
            }}
          >
            FAQ
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#ffffff",
            }}
          >
            Dog
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#ffffff",
            }}
          >
            Cat
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
    </Box>
  );
};

export default Footer;
