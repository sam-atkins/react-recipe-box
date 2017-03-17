import React from 'react';
import { Link } from 'react-router';

class Photo extends React.Component {
  render() {
    return (
      <figure className="grid-figure">
        <div className="grip-photo-wrap">
          <Link to={`/view/${this.props.recipe.meal_code}`}>
            {this.props.recipe.meal}
            <img src={this.props.recipe.display_src} alt={this.props.recipe.meal} className="grid-photo"/>
          </Link>
        </div>
        <figcaption>
          <p>{this.props.recipe.description}</p>
        </figcaption>
      </figure>
    )
  }
}

export default Photo;

