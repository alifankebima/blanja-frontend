import axios from 'axios';

const createProductAction = () => async (dispatch) => {
    const API_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;
    const token = localStorage.getItem("token");
    const auth = {
        headers: { Authorization: `Bearer ${token}` }
    }
    let dataProduct = new FormData();
    dataProduct.append("name", "baju muslim pria");
    dataProduct.append("stock", "4");
    dataProduct.append("price", "120000");
    dataProduct.append("photo", image);
    dataProduct.append("size", );
    dataProduct.append("rating", "5");
    dataProduct.append("seller_name", "baju muslim pria");
    dataProduct.append("category", "baju");
    dataProduct.append("id_category", "1");
    dataProduct.append("id_seller", "1");
    // {
    //     "id": 1,
    //     "name": "Kemeja muslim pria",
    //     "stock": "4",
    //     "price": "120.000",
    //     "photo": "/assets/img/product/baju-muslim-pria-1.png",
    //     "description": "Baju muslim pria cocok untuk segala acara muslim",
    //     "color": "yes",
    //     "size": "24",
    //     "rating": "5",
    //     "seller_name" : "Zalora cloth",
    //     "category" : "Kemeja muslim",
    //     "id_category": "5",
    //     "id_seller": "5" 
    // }


    try {
        const products = await axios.get(`${API_URL}/sellers/profile`, auth)
        const result = products.data.data;
        dispatch({type: "PROFILE", payload: result});
    } catch (error) {
        console.log(error.message);
    }
}

export default getProfileAction;



