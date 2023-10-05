import { Container, Typography, colors } from "@mui/material";
import { red } from "@mui/material/colors";
import styled from "@emotion/styled";
import Slidebar from "../components/sidebar/Sidebar";
import PrimarySearchAppBar from "../components/searchbar/SearchBar";
import SlideBar from "../components/sidebar/Sidebar";
import Post from "../components/post/Post";

const tilleStyle = { 
    color: "red",
    margin: "80px 20px 20px 250px"
};

const DocaPage = () => {
    return (
        <Container style = {tilleStyle}>
           <PrimarySearchAppBar/>
           <SlideBar/>
            <Post/>
        </Container>
    );
};



export default DocaPage