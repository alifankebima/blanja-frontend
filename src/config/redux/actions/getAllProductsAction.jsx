import axios from "axios";

const getAllProductsAction = () => async (dispatch) => {
    const API_URL = `${process.env.REACT_APP_API_URL}`;
    try {
        const products = await axios.get(`${API_URL}/products?limit=8`)
        const result = products.data.data;
        dispatch({type: "GET_ALL_PRODUCTS", payload: result})
    } catch (error) {
        console.log(error.message);
    }
}

export default getAllProductsAction;