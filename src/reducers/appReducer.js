let initialState = {
    articles: []
}

export default function appReducer(state= initialState, action){
    switch(action.type){
        case 'UPDATE_ARTICLES':
            return {
                ...state,
                articles: action.data
            }
        default:
            return state
    }
}