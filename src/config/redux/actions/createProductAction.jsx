import axios from 'axios';

const createProductAction = (data, saveImage) => async (dispatch) => {
    const API_URL = `${process.env.REACT_APP_API_URL}`;
    const token = localStorage.getItem("token");
    const auth = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
    }

    let dataProduct = new FormData();
    dataProduct.append("name", data.name);
    dataProduct.append("stock", data.stock);
    dataProduct.append("price", data.price);
    dataProduct.append("photo", saveImage);
    dataProduct.append("description", data.description);
    dataProduct.append("size", data.size);
    dataProduct.append("rating", data.rating);
    dataProduct.append("seller_name", "Zalora Cloth");
    dataProduct.append("category", data.category);
    dataProduct.append("id_category", 1);
    dataProduct.append("id_seller", 1);
    console.log(dataProduct)
    axios.post(`${API_URL}/products`, dataProduct, auth)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: "CREATE_PRODUCT" });
            alert("create success")
            window.location.reload();
        }).catch((err) => {
            console.log(err)
            alert("create failed")
        })
}

export default createProductAction;