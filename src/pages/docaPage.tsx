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
        <Box sx={{flexBasis: 800}}>
        <Box sx={{margin: "60px 30px 10px 250px",
                backgroundColor: "#FFE7BA"}}>
            <SlideBar/>
            <Box sx={{mb: 3}}>
                <PrimarySearchAppBar/>
            </Box>
            <Box sx={{ml: 3}}>
                <Post/>
            </Box>   
            <Box sx={{position: 'relative',
                    left: '45vw',
                    bottom: '95vh'
                        }}>
                <Summary/>
            </Box>
        </Box>
        <Box sx={{backgroundColor: "red",
                maxWidth:'15vw', 
                position: 'relative',
                top: '50vh'
                }}>
            Luân
        </Box>
        </Box>
    );
};



export default DocaPage