import axios from "axios";

const getAllProductsAction = () => async (dispatch) => {
    const API_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`
    ;
    try {
        const products = await axios.get(`${API_URL}/products`)
        const result = products.data.data;
        dispatch({type: "GET_ALL_PRODUCTS", payload: result})
    } catch (error) {
        console.log(error.message);
    }
}

export default getAllProductsAction;