import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{  }}>
      <Button
        onClick={() => navigate(-1)}
        size="large"
        variant="text"
        sx={{ fontWeight: "bolder" }}
        startIcon={<ArrowBackIcon />}
      />
    </Box>
  );
};

export default BackButton;
// color: "#1976d2"
