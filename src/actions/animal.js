import axios from 'axios'

export const setAnimal = (animal) => (dispatch) => {
    dispatch({
        type: "SET_ANIMAL",
        payload: { animal },
    });
};

export const setAnimalById = (id) => (dispatch) => {
    dispatch({
        type: "SET_ANIMAL_BY_ID",
        payload: { id },
    });
};

export const getAnimals = () => async (dispatch) => {
    
    await axios.get('/animals').then((response) => {
        dispatch({
            type: 'SET_ANIMALS',
            payload: { animals: response.data.animals }
        })
    })
}