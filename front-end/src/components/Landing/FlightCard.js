import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import flight_image from '../../static/images/grid-list/airplane.jpg'

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
          image={flight_image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <span style={{color: '#333333'}}>Flights</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Our flight feature will allow users to search for flights.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button href="/flights" variant="contained" size="small" color="primary">
          <strong>Search Flights</strong>
        </Button>
      </CardActions>
    </Card>
  );
}