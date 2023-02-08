const initialState = {    
    products: [],
    productDetail: {
        id: "",
        name: "",
        stock: 0,
        price: 0,
        photo: "",
        description: "",
        color: "",
        size: 0,
        rating: 0,
        id_category: 0,
        id_seller: 0
    }
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_ALL_PRODUCTS":
            return{
                ...state,
                products : action.payload
            }
        case "GET_DETAIL_PRODUCT" :
            return{
                ...state,
                productDetail : action.payload
            }
        case "CREATE_PRODUCT" :
        case "UPDATE_PRODUCT" :
        case "DELETE_PRODUCT" :
        default:
            return state
    }
}

export default productReducer;