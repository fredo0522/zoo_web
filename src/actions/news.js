import axios from 'axios'

export const getNewsDB = () => async (dispatch) => {
    await axios.get('/news').then( (response)=>{
        dispatch({
            type: "GET_NEWS",
            payload: { noticias: response.data.data}
        })
    }).catch( (error)=>{
        dispatch({
            type: "GET_NEWS",
            payload: { noticias: {}}
        })
    })
};
