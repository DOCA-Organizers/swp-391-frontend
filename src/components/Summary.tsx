import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="#4F709C" gutterBottom>
        Nguyễn Văn Nam
      </Typography>
      <Typography variant="h6" component="div" color="#4F709C" sx={{fontSize: 16}}>
        #Hastag
      </Typography>
      <Typography color="black">
        Trending: Dog, Cat
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="black">
        1,222 bài viết
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Xem thêm</Button>
    </CardActions>
  </React.Fragment>
);

export default function Summary() {
  return (
    <Box sx={{ width: 450}}>
      <Card variant="outlined" sx ={{backgroundColor:"#FFA538"}}>
        {card}
      </Card>
    </Box>
  );
}