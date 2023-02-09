const initialState = {
    sellerProfile : {
        id: "",
        email: "",
        fullname: "",
        role: "",
        phone_number: "",
        gender: "",
        date_of_birth: "",
        store_name: "",
        store_description: ""
    }
}

const sellerReducer = (state = initialState, action) => {
    switch(action.type){
        case "PROFILE":
            return{
                ...state,
                sellerProfile : action.payload
            }
        case "REGISTER_SELLER" :
        case "LOGIN_SELLER" :
        case "REFRESH_TOKEN" :
        case "UPDATE_SELLER" :
        case "DELETE_TOKEN" :
        default:
            return state
    }
}

export default sellerReducer;