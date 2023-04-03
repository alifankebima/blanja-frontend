import axios from "axios";

const deleteProductAction = (id) => async (dispatch) => {
    const API_URL = `${process.env.REACT_APP_API_URL}`
    const token = localStorage.getItem("token");
    const auth = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    try {
        const result = await axios.delete(`${API_URL}/products/${id}`, auth);
        console.log(result.data);
        alert("delete success");
        window.location.reload();
    } catch (error) {
        console.log(error.message);
        alert("delete failed");
    }
}

export default deleteProductAction;