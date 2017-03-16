function posts(state = [], action) {
  switch(action.type) {
    case 'increment_likes':
      console.log("Incrementing likes!");
      return state
    default:
      return state;
  }
}

export default posts;
