import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import hotel_image from '../../static/images/grid-list/hotel.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 100,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={hotel_image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <span style={{color: '#333333'}}>Hotel</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Our hotels feature will allow users to search for hotels.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button href="/hotels" variant="contained" size="small" color="primary">
          <strong>Search Hotels</strong>
        </Button>
      </CardActions>
    </Card>
  );
}