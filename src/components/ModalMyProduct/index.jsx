import axios from 'axios';
import React, { useState } from 'react'

const ModalMyProduct = (props) => {
    const [name, setName] = useState(props.data.name);
    const [stock, setStock] = useState(props.data.stock);
    const [price, setPrice] = useState(props.data.price);
    const [saveImage, setSaveImage] = useState(null);
    const [description, setDescription] = useState(props.data.description);
    const [color, setColor] = useState(props.data.color);
    const [size, setSize] = useState(props.data.size);
    const [rating, setRating] = useState(props.data.rating);

    function handleUpload(e) {
        console.log(e.target.files[0]);
        const uploader = e.target.files[0];
        setSaveImage(uploader);
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataProduct = new FormData();
        dataProduct.append("name", name);
        dataProduct.append("stock", stock);
        dataProduct.append("price", price);
        dataProduct.append("photo", saveImage);
        dataProduct.append("description", description);
        dataProduct.append("size", size);
        dataProduct.append("rating", rating);
        dataProduct.append("seller_name", "Zalora Cloth");
        dataProduct.append("category", "");
        dataProduct.append("id_category", 1);
        dataProduct.append("id_seller", 1);
        const API_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;
        const token = localStorage.getItem("token");
        const auth2 = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        }
        console.log(dataProduct);
        axios.put(`${API_URL}/products/${props.data.id}`, dataProduct, auth2)
          .then((res) => {
            console.log(res);
            alert("update successful");
            window.location.reload();
          }).catch((err) => {
            console.log(err.response.data.message)
            alert("update failed\nReason : " + err.response.data.message)
          })
      }

    return (
        <div className="modal fade" id={`exampleModal${props.data.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{props.data.name}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="container-fluid">

                  <div className="row align-items-center">
                    <div className="col-4 mt-3 text-end">
                        {props.id}
                      <span className="text-secondary">Nama</span>
                    </div>
                    <div className="col-8 mt-3">
                      <input type="text" className="form-control py-2 px-3" name='name' value={name} onChange={(e) => setName(e.target.value)}            
             />
                    </div>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Stok</span>
                    </div>
                    <div className="col-8 mt-3">
                      <input type="text" className="form-control py-2 px-3" name='stock' value={stock} onChange={(e) => setStock(e.target.value)}
             />
                    </div>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Harga</span>
                    </div>
                    <div className="col-8 mt-3">
                      <input type="text" className="form-control py-2 px-3" name='price' value={price} onChange={(e) => setPrice(e.target.value)}
             />
                    </div>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Gambar</span>
                    </div>
                    <div className="col-8 mt-3">
                      <input type="file" className="form-control py-2 px-3" name="photo" onChange={handleUpload} />
                    </div>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Deskripsi</span>
                    </div>
                    <div className="col-8 mt-3 d-flex gap-4">
                      <input type="text" className="form-control py-2 px-3" name='description' value={description} onChange={(e) => setDescription(e.target.value)}
             />
                    </div>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Ukuran</span>
                    </div>
                    <div className="col-8 mt-3 d-flex gap-4">
                      <input type="text" className="form-control py-2 px-3" name='size' value={size} onChange={(e) => setSize(e.target.value)}
             />
                    </div>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Rating</span>
                    </div>
                    <div className="col-8 mt-3 d-flex gap-4">
                      <input type="text" className="form-control py-2 px-3" name='rating'  value={rating} onChange={(e) => setRating(e.target.value)}
             />
                    </div>
                    {/* <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Category</span>
                    </div>
                    <div className="col-8 mt-3 d-flex gap-4">
                      <input type="text" className="form-control py-2 px-3"  name='category'  value={props.data.category}
             />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default ModalMyProduct