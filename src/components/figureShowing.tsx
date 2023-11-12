import { Box, Grid, Typography } from "@mui/material";

const FigureShowing = () => {
  const styled = {
    justifyContent: "center",
    position: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: "15px",
    border: "2px",
    width: 5,
  };
  return (
    <Box
      sx={{
        marginRight: 6,
        marginLeft: 5,
        borderRadius: 10,
        backgroundColor: "#F0F0F0",
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={4} sx={styled}>
          <Typography sx={{ marginBottom: 5, fontWeight: "bold" }}>
            Number of Posts: 1,200
          </Typography>
        </Grid>
        <Grid item xs={4} sx={styled}>
          <Typography sx={{ marginBottom: 5, fontWeight: "bold" }}>
            Number of Reports: 45
          </Typography>
        </Grid>
        <Grid item xs={4} sx={styled}>
          <Typography sx={{ marginBottom: 5, fontWeight: "bold" }}>
            Number of Accounts:871
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FigureShowing;
