// increment
export function increment(index) {
  return {
    type: 'increment_likes',
    index
  }
}

// add comment
export function addIngredient(postId, newIngredient) {
  return {
    type: 'add_ingredient',
    postId,
    newIngredient
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
