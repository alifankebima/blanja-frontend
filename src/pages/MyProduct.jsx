import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProfileSidebar from '../components/ProfileSidebar';
import DataTable from 'react-data-table-component';

const MyProduct = () => {
  const Button = () =>{
    return (
      <div>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    )
  };

  const [profile, setProfile] = useState({});
  const [products, setProducts] = useState({});
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/sellers/profile`, config)
      .then(function (response) {
        setProfile(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      axios.get(`${process.env.REACT_APP_API_URL}/products`, config)
      .then(function (response) {
        setProducts(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const columns = [
    {
        name: 'Name',
        maxWidth: '200px',
        selector: row => row.name,
    },
    {
        name: 'Stock',
        maxWidth: '100px',
        selector: row => row.stock,
    },
    {
        name: 'Price',
        maxWidth: '100px',
        selector: row => row.price,
    },
    {
      name: 'Description',
      maxWidth: '100px',
      selector: row => row.description,
    },
    {
      name: 'Color',
      maxWidth: '100px',
      selector: row => row.color,
    },
    {
      name: 'Size',
      maxWidth: '100px',
      selector: row => row.size,
    },
    {
      name: 'Action',
      button: true,
      cell: () => <Button>Download Poster</Button>,
    },
];


  return (
    <div className='bg-soft-white' style={{height:"100vh"}}>
      <Navbar />
      <ProfileSidebar fullname="Alif Anke Bima" />
      <div style={{ margin: "5vh 5vw 5vh 30vw" }}>
        <div className="container border rounded bg-white p-4">
          <div className="row">
            <div className="col">
              <h5 className="fw-semibold">My Products</h5>
              <h6 className="fw-light text-secondary">Kelola informasi profil anda</h6>
            </div>
          </div>
          <hr />
          <DataTable
            columns={columns}
            data={products}
        />
        </div>
      </div>
    </div>
  )
}

export default MyProduct