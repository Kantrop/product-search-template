import React from 'react';
import { InputProps } from '../../types';
import './Input.css';

export const Input: React.FC<InputProps>  = () => {
  return (
    <div>
      <h1 className="big_h1">Barnsley Brew AlcoMarket</h1>
			<p className="h1_index">Your best choice!</p>
      <div className="search_form">
        <input type="text" 
          placeholder="Search in the alco drink..." 
          className="search_input"
          onChange={(event) => console.log(event.target.value)}
          />
        <button type="submit" className="search-submit"></button>
      </div>
    </div>
  );
};

export default Input;
