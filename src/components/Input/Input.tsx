import React from 'react';
import { Loupe } from '../../assets';
import { InputProps } from '../../types';
import './Input.css';

export const Input: React.FC<InputProps>  = () => {
  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
      </head>
			<p className="search_info">Search for something</p>
      <div className="search_form">
        <img src={Loupe} alt="loupe"/>
        <input type="text" 
          className="search_input"
          placeholder="Barnsley Brew Coffee" 
          onChange={(event) => console.log(event.target.value)}
        />
      </div>
      <hr className="search_line" data-align="center" color="Black"/>
      <p className="bottom_text">
        Just type something in input above to start searching. 
        Search presented by public API, and all content are fake (or maybe not)
      </p>
      <p className="result_text">Results:</p>
    </div>
  );
};

export default Input;