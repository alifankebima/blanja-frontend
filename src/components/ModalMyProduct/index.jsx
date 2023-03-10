import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import updateProductAction from '../../config/redux/actions/updateProductAction';

const ModalMyProduct = (props) => {
  const dispatch = useDispatch();
  const [saveImage, setSaveImage] = useState(null);

  const [data, setData] = useState({
    name: props.data.name,
    stock: props.data.stock,
    price: props.data.price,
    photo: props.data.photo,
    description: props.data.description,
    color: props.data.color,
    size: props.data.size,
    rating: props.data.rating,
    seller_name: props.data.sellerName,
    category: props.data.category,
    id_category: props.data.id_category,
    id_seller: props.data.id_seller
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  function handleUpload(e) {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }

  return (
    <div className="modal fade" id={`exampleModal${props.data.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{props.data.name}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); dispatch(updateProductAction(props.data, saveImage, props.data.id)) }}>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-4 mt-3 text-end">
                    {props.id}
                    <span className="text-secondary">Nama</span>
                  </div>
                  <div className="col-8 mt-3">
                    <input type="text" className="form-control py-2 px-3" name='name' value={data.name} onChange={handleChange}
                    />
                  </div>
                  <div className="col-4 mt-3 text-end">
                    <span className="text-secondary">Stok</span>
                  </div>
                  <div className="col-8 mt-3">
                    <input type="text" className="form-control py-2 px-3" name='stock' value={data.stock} onChange={handleChange}
                    />
                  </div>
                  <div className="col-4 mt-3 text-end">
                    <span className="text-secondary">Harga</span>
                  </div>
                  <div className="col-8 mt-3">
                    <input type="text" className="form-control py-2 px-3" name='price' value={data.price} onChange={handleChange}
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
                    <input type="text" className="form-control py-2 px-3" name='description' value={data.description} onChange={handleChange}
                    />
                  </div>
                  <div className="col-4 mt-3 text-end">
                    <span className="text-secondary">Ukuran</span>
                  </div>
                  <div className="col-8 mt-3 d-flex gap-4">
                    <input type="text" className="form-control py-2 px-3" name='size' value={data.size} onChange={handleChange}
                    />
                  </div>
                  <div className="col-4 mt-3 text-end">
                    <span className="text-secondary">Rating</span>
                  </div>
                  <div className="col-8 mt-3 d-flex gap-4">
                    <input type="text" className="form-control py-2 px-3" name='rating' value={data.rating} onChange={handleChange}
                    />
                  </div>
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