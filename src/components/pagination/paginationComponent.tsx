import { Box, Pagination } from "@mui/material";

const pageSize = 10;

const PaginationComponent = () => {
  return <Pagination count={10} variant="outlined" shape="rounded" />;
};

export default PaginationComponent;
