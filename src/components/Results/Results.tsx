import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { ResultsProps } from '../../types';
import './Results.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 300,
    marginLeft: 40,
    display: 'inline-flex',
    minWidth: '250px'

  },
  media: {
    height: 80,
  },
});



export const Results: React.FC<ResultsProps> = ({beers}) => {
  const classes = useStyles();
  
  return (
    <div>
      {beers.map(beer =>
        <Card key={beer.id} className={classes.root}>
          <img className="result_img" src={beer.image_url}/>
          <CardActionArea>
            <CardMedia
              className={classes.media}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{height: '65px'}}>
                {beer.name}
              </Typography>
              <Typography className="result_description" variant="body2" color="textSecondary" component="p">
                {beer.description}
              </Typography>
              <div className="result_data">
                <div className="result_deg">{beer.abv}°</div>
                <div className="result_price">{beer.ebc}$</div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        )}
    </div>
    
  );
};

export default Results;
