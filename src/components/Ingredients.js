import React from 'react';

class Ingredients extends React.Component {
  constructor() {
    super();

    // bind helpers i.e. allows use of 'this' for custom methods
    this.renderIngredients = this.renderIngredients.bind(this);

  }

  renderIngredients(ingredient, i) {
  
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{ingredient}</strong>
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }
 
  render() {
    // console.log(this);
    
    // deconstructor to const to help keep code cleaner
    const { recipes } = this.props;

    // find the index of the recipe
    const i = recipes.findIndex((recipe) => recipe.meal_code === this.props.params.postId);
    // console.log(`This is the recipe index = ${i}`);
    
    // console.log(`These are the ingredients: ${recipes[i].ingredients}`);
    return (
      <div className="comments">
        {recipes[i].ingredients.map(this.renderIngredients)}
        <form ref="addIngredient" className="comment-form">
          <input type="text" ref="ingredient" placeholder="Ingredient" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Ingredients;
