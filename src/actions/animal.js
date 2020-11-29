export const setAnimal = (animal) => (dispatch) => {
  dispatch({
    type: "SET_ANIMAL",
    payload: { animal },
  });
};

export const filterAnimals = (text) => (dispatch) => {
  dispatch({
    type: "FILTER_ANIMALS",
    payload: { text },
  });
};

export const setAnimalByName = (name) => (dispatch) => {
  dispatch({
    type: "SET_ANIMAL_BY_NAME",
    payload: { name },
  });
};