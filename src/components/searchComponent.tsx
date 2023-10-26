import {
  Box,
  Container,
  Grid,
  Pagination,
  Paper,
  Stack,
  styled,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// const columns: GridColDef[] = []

// const SearchComponent = () => {
//   const [searchList, setSearchList] = useState<[]>([]);
//
//   useEffect(() => {
//     const getPetList = async () => {
//       const data: any = await petAPI.getPetList();
//       console.log(data);
//       if (data.length > 0) {
//         setPetList(data);
//       }
//     };
//     const initUseEffect = async () => {
//       await getPetList();
//     };
//     initUseEffect();
//   }, []);
//   return (
//     <Container>
//       <Box sx={{ width: "100%" }}>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//           <Grid item xs={12}>
//           <DataGrid
//         rows={petList.map((con, index) => {
//           return
//           <Box>

//           </Box>
//         })}
//         getRowId={(row) => row.id}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//           </Grid>
//         </Grid>
//         <Stack spacing={2}>
//           <Pagination count={10} shape="rounded" />
//           <Pagination count={10} variant="outlined" shape="rounded" />
//         </Stack>
//       </Box>
//     </Container>
//   );
// };

// export default SearchComponent;
