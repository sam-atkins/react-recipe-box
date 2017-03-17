import React from 'react';
import { Link } from 'react-router';

class Photo extends React.Component {
  render() {
    
    const { recipe } = this.props;
    // deconstructed above, is the same as the below
    // const recipe = this.props.recipe;
    
    return (
      <figure className="grid-figure">
        <div className="grip-photo-wrap">
          <Link to={`/view/${recipe.meal_code}`}>
            <img src={recipe.display_src} alt={recipe.meal} className="grid-photo"/>
          </Link>
          <span>{recipe.meal}</span>
        </div>
        <figcaption>
          <p>{recipe.description}</p>
        </figcaption>
      </figure>
    )
  }
}

export default Photo;

