import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function Post() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 650,
                maxHeight: 800 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"
            src='https://cdn-icons-png.flaticon.com/128/706/706807.png'
          > 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="namnguyen2u3"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="500"
        image="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/385439444_2569493933200381_1839264531297998378_n.jpg?stp=cp6_dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=RfnEAYtwxQkAX_CUvCY&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCMfoF8u489Mt8WfsTDvrjqQCjaOFZvVVvbl3FRrG1i3A&oe=6521F8E6"
        alt="My Pet"
      />
      <CardContent>
        <Typography variant="body2" color="#000000">
        Sunny day . . . Hypotizing photoshoot with my favours. 
        Have a gud day !!!
        </Typography>
        <Typography variant="button" color="#8A98A4">
            <PlaceOutlinedIcon/>
            Ho Chi Minh, Viet Nam
        </Typography>
      </CardContent>
      <CardActions  
                    sx ={{
                        justifyContent: "space-between"
                    }}            
        >
        <IconButton aria-label="like">
          <FavoriteBorderOutlinedIcon/>
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutlineOutlinedIcon/>
        </IconButton>
        <IconButton aria-label="report">
          <FlagOutlinedIcon/>
        </IconButton>
        <IconButton aria-label="bookmark">
          <BookmarkBorderOutlinedIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}