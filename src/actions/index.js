import jsonPlaceholder from '../APIs/jsonPlaceholder';
import _ from 'lodash';


export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
    };

    //response.data is an array of fake blogpost objects

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
}


// this is pre-refactor for first export
// export const fetchPosts = () => {
//     return async (dispatch, getState) => {                     //dispatch and getState are from thunk
//         const response = await jsonPlaceholder.get('.posts')

//         dispatch({ type: 'FETCH_POSTS', payload: response.data})
//     };
// };