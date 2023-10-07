import { Box, Container, Typography, colors } from "@mui/material";
import { red } from "@mui/material/colors";
import styled from "@emotion/styled";
import Slidebar from "../components/sidebar/Sidebar";
import PrimarySearchAppBar from "../components/searchbar/SearchBar";
import SlideBar from "../components/sidebar/Sidebar";
import Post from "../components/post/Post";
import Summary from "components/Summary";
import { relative } from "path";



const DocaPage = () => {
    return (
        <Box sx={{
                backgroundColor: '#F0F0F0' }}>
                <SlideBar/>
            <Box sx={{ marginTop: '125px'}}>
                <Box sx={{position: 'relative', left: '20%',
                        maxWidth: '50%'
                        }}>
                    <Post/>
                </Box>
                <Box sx={{position: 'relative', left: '70%',
                        maxWidth: '30%', bottom: '713px'
                        }}>
                    <Summary/>
                </Box>
                
            </Box>   
        </Box>
    );
};



export default DocaPage