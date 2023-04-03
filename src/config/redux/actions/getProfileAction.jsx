import axios from 'axios';

const getProfileAction = () => async (dispatch) => {
    const API_URL = `${process.env.REACT_APP_API_URL}`;
    const token = localStorage.getItem("token");
    const auth = {
        headers: { Authorization: `Bearer ${token}` }
    }

    try {
        const products = await axios.get(`${API_URL}/sellers/profile`, auth)
        const result = products.data.data;
        dispatch({type: "PROFILE", payload: result});
    } catch (error) {
        console.log(error.message);
    }
}

export default getProfileAction;