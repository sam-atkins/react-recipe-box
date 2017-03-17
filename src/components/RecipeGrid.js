import React from 'react';
import Photo from './Photo';

class RecipeGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.recipes.map((recipe, i) => <Photo {...this.props} key={i} i={i} recipe={recipe} /> )}
      </div>
    )
  }
}

export default RecipeGrid;
