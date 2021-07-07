import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { ResultsProps } from '../../types';
import './Results.css';

export const Results: React.FC<ResultsProps> = ({beers}) => {
  
  return (
    <div>
      {beers.map(beer =>
        <Card key={beer.id} className="cart_root">
          <img className="result_img" src={beer.image_url}/>
          <CardActionArea>
            <CardMedia className="cart_media"/>
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
