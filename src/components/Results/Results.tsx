import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
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



export const Results: React.FC<ResultsProps> = ({beers}) => {
  const classes = useStyles();
  
  return (
    <div>
      {beers.map(beer =>
        <Card key={beer.id} className={classes.root} style={{display: "inline-flex", minWidth: "250px"}}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={beer.image_url}
              title="beer image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {beer.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
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
