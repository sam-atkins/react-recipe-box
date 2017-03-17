import React, { Component } from 'react';
import Photo from './Photo';
import Ingredients from './Ingredients';

class Recipe extends Component {
  render() {

    // find the index of the recipe
    const i = this.props.recipes.findIndex((recipe) => recipe.meal_code === this.props.params.postId);
    // console.log(`This is the recipe index = ${i}`);

    // get the recipe in order to render it
    const recipe = this.props.recipes[i];
    // console.log(recipe);

    return (
      <div className="single-photo">
        <Photo i={i} recipe={recipe} {...this.props} />
        <Ingredients {...this.props}/>
      </div>
    )
  }
}

export default Recipe;
