export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
/*  case 'second case'
      return ...
*/
    default:
      return state;
  }

/*  if (action.type === 'FETCH_POSTS') {
    return action.payload;
  }

  return state;
*/
};