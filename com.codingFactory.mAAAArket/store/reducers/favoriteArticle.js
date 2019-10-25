
const initialState = { favoritesArticles: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteArticleIndex = state.favoritesArticles.findIndex(item => item.id === action.value.id)
      if (favoriteArticleIndex !== -1) {
        nextState = {
          ...state,
          favoritesArticles: state.favoritesArticles.filter( (item, index) => index !== favoriteArticleIndex)
        }
      }
      else {
        nextState = {
          ...state,
          favoritesArticles: [...state.favoritesArticles, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite