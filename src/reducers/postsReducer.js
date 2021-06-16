export default (state = [], action) => {
    switch (action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default: 
            return state
    }
};


//reducers need return statements