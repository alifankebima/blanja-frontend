//storing data here

const initialState = {
    count : 0
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT":
            return{
                ...state,
                count : state.count + action.payload
            }
        case "DECREMENT" :
            return{
                ...state,
                count : state.count - 1
            }
        default:
            return state
    }
}

export default counterReducer;