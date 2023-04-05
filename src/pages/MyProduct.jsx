import React, { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar'
import ProfileSidebar from '../components/ProfileSidebar';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import getAllProductsAction from '../config/redux/actions/getAllProductsAction';
import createProductAction from '../config/redux/actions/createProductAction';
import deleteProductAction from '../config/redux/actions/deleteProductAction';
import ModalMyProduct from '../components/ModalMyProduct';

const MyProduct = () => {
  const dispatch = useDispatch();
  const { products, productDetail } = useSelector((state) => state.product)
  const [saveImage, setSaveImage] = useState(null);

  //Get all products data
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [])

  //handle image upload
  function handleUpload(e) {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }

  //Delete product
  const handleDelete = (id) => {
    dispatch(deleteProductAction(id))
  };

  //Initial product data
  const [data, setData] = useState({
    name: productDetail.name,
    stock: productDetail.stock,
    price: productDetail.price,
    photo: productDetail.photo,
    description: productDetail.description,
    color: productDetail.color,
    size: productDetail.size,
    rating: productDetail.rating,
    seller_name: productDetail.sellerName,
    category: productDetail.category,
    id_category: productDetail.id_category,
    id_seller: productDetail.id_seller
  });

  //Handle seler input
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const currencyFormat = (num) => {
    return (
      'Rp. ' +
      Number(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };

  //React data table component colums
  const columns = [
    {
      name: "Photo",
      selector: "image",
      maxWidth: '120px',
      cell: (row) => (
        <img
          src={row.photo}
          alt={row.title}
          
          style={{ width: "100px", marginBottom: "10px", marginTop: "10px", borderRadius: '15px' }}
        />
      ),
    },
    {
      name: 'Name',
      maxWidth: '160px',
      selector: row => row.name,
    },
    {
      name: 'Stock',
      width: '80px',
      selector: row => row.stock,
    },
    {
      name: 'Price',
      maxWidth: '120px',
      selector: row => currencyFormat(row.price),
    },
    {
      name: 'Description',
      maxWidth: '140px',
      selector: row => row.description,
    },
    {
      name: 'Size',
      maxWidth: '60px',
      selector: row => row.size,
    },
    {
      name: 'Action',
      button: true,
      cell: (row) => (
        <div>
          <ModalMyProduct data={row}/>
          <button type="button" className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target={`#exampleModal${row.id}`}>
          <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        <button type="button" className='btn btn-danger' onClick={() => handleDelete(row.id)}><FontAwesomeIcon icon={faTrash} />
          </button>
      </div>
        ),
    },
  ];

  return (
    <Fragment>
      <div className='bg-soft-white' style={{ height: "100vh" }}>
        <Navbar />
        <ProfileSidebar fullname="Alif Anke Bima" />

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Tambahkan Produk</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={(e) => {e.preventDefault(); dispatch(createProductAction(data, saveImage))}}>
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
                <h5 className="fw-semibold">My Products</h5>
                <h6 className="fw-light text-secondary">Manage your store products</h6>
              </div>
            </div>
            <hr />
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add Product
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