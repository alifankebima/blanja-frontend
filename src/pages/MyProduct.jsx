import React, { Fragment, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProfileSidebar from '../components/ProfileSidebar';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import getAllProductsAction from '../config/redux/actions/getAllProductsAction';

const MyProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [])

  const ActionButton = () => {
    return (
      <div>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    )
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
      cell: () => <ActionButton />,
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
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <form submit={}></form>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Nama</span>
                    </div>
                    <div className="col-8 mt-3">
                      <input type="name" className="form-control py-2 px-3" id="email" name="name" value="" />
                    </div>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Stok</span>
                    </div>
                    <div className="col-8 mt-3">
                      <input type="email" className="form-control py-2 px-3" id="email" name="email" value="" />
                    </div>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Harga</span>
                    </div>
                    <div className="col-8 mt-3">
                      <div className="input-group flex-nowrap">
                      <input type="name" className="form-control py-2 px-3" id="email" name="name" value="" />
                      </div>
                    </div>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Deskripsi</span>
                    </div>
                    <div className="col-8 mt-3 d-flex gap-4">
                    <input type="name" className="form-control py-2 px-3" id="email" name="name" value="" />
                    </div>
                    <div className="col-4 mt-3 text-end">
                      <span className="text-secondary">Ukuran</span>
                    </div>
                    <div className="col-8 mt-3">
                      <input type="date" className="form-control py-2 px-3" id="email" name="name" value="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
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