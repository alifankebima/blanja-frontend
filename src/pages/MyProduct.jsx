import React, { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar'
import ProfileSidebar from '../components/ProfileSidebar';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import getAllProductsAction from '../config/redux/actions/getAllProductsAction';
import axios from 'axios';
import ModalMyProduct from '../components/ModalMyProduct';

const MyProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product)
  const [show, setShow] = useState(false);
  const [saveImage, setSaveImage] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }
  
  const API_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;
  const token = localStorage.getItem("token");
  const auth = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const handleDelete = (id) => {
    console.log(id)
    axios
      .delete(API_URL + "/products/" + id, auth)
      .then((res) => {
        alert("delete success");
        setShow(false)
        window.location.reload();
        })
      .catch((err) => {
        alert("delete failed");
        setShow(false)
      });
  };

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [])

  const [data, setData] = useState({
    name: "",
    stock: "",
    price: "",
    photo: "",
    description: "",
    color: "",
    size: "",
    rating: "",
    seller_name: "",
    category: "",
    id_category: "",
    id_seller: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const columns = [
    {
      name: "Image",
      selector: "image",
      cell: (row) => (
        <img
          src={row.photo}
          alt={row.title}
          crossOrigin='anonymous'
          style={{ width: "100px", marginBottom: "10px", marginTop: "10px", borderRadius: '15px' }}
        />
      ),
    },
    {
      name: 'Nama',
      maxWidth: '200px',
      selector: row => row.name,
    },
    {
      name: 'Stok',
      maxWidth: '100px',
      selector: row => row.stock,
    },
    {
      name: 'Harga',
      maxWidth: '100px',
      selector: row => row.price,
    },
    {
      name: 'Deskripsi',
      maxWidth: '100px',
      selector: row => row.description,
    },
    // {
    //   name: 'Warna',
    //   maxWidth: '100px',
    //   selector: row => row.color,
    // },
    {
      name: 'Ukuran',
      maxWidth: '100px',
      selector: row => row.size,
    },
    {
      name: 'Action',
      button: true,
      cell: (row) => (
        <div>
          <ModalMyProduct data={row}/>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${row.id}`}>
          <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        <button type="button" className='btn btn-danger' onClick={() => handleDelete(row.id)}><FontAwesomeIcon icon={faTrash} />
          </button>
      </div>
        ),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataProduct = new FormData();
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
    const API_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;
    const token = localStorage.getItem("token");
    const auth2 = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }
    console.log(dataProduct);
    axios.post(`${API_URL}/products`, dataProduct, auth2)
      .then((res) => {
        alert("update successful");
        setShow(false)
        window.location.reload();
      }).catch((err) => {
        alert("update failed")
        setShow(false)
      })
  }

  return (
    <Fragment>
      <div className='bg-soft-white' style={{ height: "100vh" }}>
        <Navbar />
        <ProfileSidebar fullname="Alif Anke Bima" />

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="container-fluid">

                    <div className="row align-items-center">
                      <div className="col-4 mt-3 text-end">
                        <span className="text-secondary">Nama</span>
                      </div>
                      <div className="col-8 mt-3">
                        <input type="text" className="form-control py-2 px-3" name='name'              
              onChange={handleChange} />
                      </div>
                      <div className="col-4 mt-3 text-end">
                        <span className="text-secondary">Stok</span>
                      </div>
                      <div className="col-8 mt-3">
                        <input type="text" className="form-control py-2 px-3" name='stock'    
              onChange={handleChange} />
                      </div>
                      <div className="col-4 mt-3 text-end">
                        <span className="text-secondary">Harga</span>
                      </div>
                      <div className="col-8 mt-3">
                        <input type="text" className="form-control py-2 px-3" name='price'   
              onChange={handleChange} />
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
                        <input type="text" className="form-control py-2 px-3" name='description' 
              onChange={handleChange} />
                      </div>
                      <div className="col-4 mt-3 text-end">
                        <span className="text-secondary">Ukuran</span>
                      </div>
                      <div className="col-8 mt-3 d-flex gap-4">
                        <input type="text" className="form-control py-2 px-3" name='size'
              onChange={handleChange} />
                      </div>
                      <div className="col-4 mt-3 text-end">
                        <span className="text-secondary">Rating</span>
                      </div>
                      <div className="col-8 mt-3 d-flex gap-4">
                        <input type="text" className="form-control py-2 px-3" name='rating'  
              onChange={handleChange} />
                      </div>
                      {/* <div className="col-4 mt-3 text-end">
                        <span className="text-secondary">Category</span>
                      </div>
                      <div className="col-8 mt-3 d-flex gap-4">
                        <input type="text" className="form-control py-2 px-3"  name='category'           
              onChange={handleChange} />
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




        <div style={{ margin: "5vh 5vw 5vh 30vw" }}>
          <div className="container border rounded bg-white p-4">
            <div className="row">
              <div className="col">
                <h5 className="fw-semibold">Produk Saya</h5>
                <h6 className="fw-light text-secondary">Kelola produk toko anda</h6>
              </div>
            </div>
            <hr />
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Tambahkan Produk
            </button>
            <DataTable
              columns={columns}
              data={products}
              pagination={true}
              paginationPerPage={10}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MyProduct