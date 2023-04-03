import axios from "axios";

const getProductDetailAction = (id) => async (dispatch) => {
    const API_URL = `${process.env.REACT_APP_API_URL}`
    
    try {
        const products = await axios.get(`${API_URL}/products/${id}`);
        const result = products.data.data;
        dispatch({type: "GET_DETAIL_PRODUCT", payload: result});
    } catch (error) {
        console.log(error.message);
    }
}

export default getProductDetailAction;