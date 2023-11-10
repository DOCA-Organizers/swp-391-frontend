import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="#FFFFDD" gutterBottom>
        Nguyễn Văn Nam 
        <CheckCircleIcon/>
      </Typography>
      <Typography variant="h6" component="div" color="#FFFFDD" sx={{fontSize: 16}}>
        #Hastag
      </Typography>
      <Typography color="#FFFFDD">
        Trending: Dog, Cat
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="#FFFFDD">
        1,222 bài viết
      </Typography>
      <Typography variant="body2" color={"#D2DE32"}>
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      {/* <Button size="small">
        <Typography color="#FFFFDD">
          More
        </Typography>
        </Button> */}
    </CardActions>
  </React.Fragment>
);

export default function Summary() {
  return (
    <Box sx={{ maxWidth: 350,
              maxHeight: 500,
              }}>
      <Card variant="outlined" sx ={{backgroundColor:"#61A3BA"}}>
        {card}
      </Card>
    </Box>
  );
}