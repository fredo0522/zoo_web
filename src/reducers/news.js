let initialState = {
  noticias: []
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        noticias: action.payload.noticias.map( (item)=>{
          item.id = parseInt(item.id)
          return item
        } ),
      };
    default:
      return {
        ...state,
        noticias: state.noticias,
      };
  }
};

export default newsReducer;
