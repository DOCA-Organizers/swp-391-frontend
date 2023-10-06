import { Container, Typography, colors } from "@mui/material";
import { red } from "@mui/material/colors";
import styled from "@emotion/styled";
import Slidebar from "../components/sidebar/Sidebar";
import PrimarySearchAppBar from "../components/searchbar/SearchBar";
import SlideBar from "../components/sidebar/Sidebar";
import Post from "../components/post/Post";
import Summary from "components/Summary";


const DocaPage = () => {
    return (
        <Container>
           <PrimarySearchAppBar/>
           <SlideBar/>
            <Post/>
            <Summary/>
        </Container>
    );
};



export default DocaPage