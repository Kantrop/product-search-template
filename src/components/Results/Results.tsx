import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { ResultsProps } from '../../types';
import './Results.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 100,
    marginLeft: 40
  },
  media: {
    height: 240,
  },
});

export const Results: React.FC<ResultsProps> = () => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://material.angular.io/assets/img/examples/shiba2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="result_data">
        <div className="result_deg">12°</div>
        <div className="result_price">999$</div>
      </CardActions>
    </Card>
  );
};

export default Results;
