const initialState = {
    products: [],
    productDetail: {
        name: "",
        stock: "",
        price: "",
        photo: null,
        description: "",
        color: "",
        size: "",
        rating: "",
        seller_name: "",
        category: "",
        id_category: "",
        id_seller: ""
    }
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "GET_DETAIL_PRODUCT":
            return {
                ...state,
                productDetail: action.payload
            }
        case "CREATE_PRODUCT":
            return {
                ...state,
                productDetail: action.payload
            }
        case "UPDATE_PRODUCT":
            return {
                ...state,
                productDetail: action.payload
            }
        case "DELETE_PRODUCT":
            return {
                ...state,
                productDetail: action.payload
            }
        default:
            return state
    }
}

export default productReducer;