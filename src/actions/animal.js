import axios from 'axios'

export const setAnimal = (animal) => (dispatch) => {
    dispatch({
        type: "SET_ANIMAL",
        payload: { animal },
    });
};

export const setAnimalById = (id) => async (dispatch) => {
    await axios.get('/animals/'+id).then( (response)=>{
        dispatch({
            type: "SET_ANIMAL_BY_ID",
            payload: { animal: response.data.data[0]}
        })
    }).catch( (error)=>{
        dispatch({
            type: "SET_ANIMAL_BY_ID",
            payload: { animal: {}}
        })
    } )

    
};

export const getAnimals = () => async (dispatch) => {
    await axios.get('/animals').then((response) => {
        dispatch({
            type: 'SET_ANIMALS',
            payload: { animals: response.data.data }
        })
    })
}