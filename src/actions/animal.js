import axios from 'axios'

export const setAnimal = (animal) => (dispatch) => {
    dispatch({
        type: "SET_ANIMAL",
        payload: { animal },
    });
};

export const filterAnimals = (text) => (dispatch) => {
    dispatch({
        type: "FILTER_ANIMALS",
        payload: { name: text },
    });
};

export const setAnimalById = (id) => (dispatch) => {
    dispatch({
        type: "SET_ANIMAL_BY_ID",
        payload: { id },
    });
};

export const getAnimals = () => async (dispatch) => {
    axios.get('/animals').then((response) => {
        const respuesta = response.data.animals

        console.log( respuesta, " vs. ", response )
        dispatch({
            type: 'SET_ANIMALS',
            payload: { animals: respuesta }
        })
    })
}