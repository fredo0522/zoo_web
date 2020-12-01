export const getNews = (news) => (dispatch) => {
  dispatch({
    type: "GET_NEWS",
    payload: { news },
  });
};
