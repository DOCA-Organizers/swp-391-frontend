import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorMessage = ({ message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        mt: "6px",
        ml: "5px",
      }}
    >
      <ErrorIcon color="error" sx={{ width: "20px" }} />
      <Typography color="error.main" variant="span" fontSize="14px">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
