// increment
export function increment(index) {
  return {
    type: 'increment_likes',
    index
  }
}

// add comment
export function addIngredient(postId, ingredient) {
  return {
    type: 'add_ingredient',
    postId,
    ingredient
  }
}

// remove comment
export function removeIngredient(postId, i) {
  return {
    type: 'remove_ingredient',
    postId,
    i
  }
}
