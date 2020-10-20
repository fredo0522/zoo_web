export const setAnimal = (animal) => (dispatch) => {
  dispatch({
    type: 'SET_ANIMAL',
    payload: { animal }
  });
}
