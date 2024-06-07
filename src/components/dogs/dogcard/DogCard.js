import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function DogCard({dog}) {
  return (
    <Card sx={{ maxWidth: 345, minHeight:400}}>
    <CardMedia
      sx={{ height: 270 }}
      image={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
      title={dog.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {dog.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        These dogs were bred for the purpose of {dog.bred_for}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/dogs/${dog.name}`}><Button size="small">More Info</Button></Link>
    </CardActions>
  </Card>
  );
}
