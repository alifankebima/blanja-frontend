<br />
<p align="center">
  <div align="center">
    <img height="150" src="./docs/readme/logo.svg" alt="blanja" border="0"/>
  </div>
  <h3 align="center">Blanja (E-Commerce App)</h3>
  <p align="center">
    <a href="https://github.com/alifankebima/blanja-frontend"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://blanja-frontend-alifankebima.vercel.app">View Demo</a>
    ·
    <a href="https://blanja-backend-production-71bf.up.railway.app">Api Demo</a>
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisite](#prerequisites)
  - [Installation](#installation)
- [Screenshots](#screenshots)
- [Related Project](#related-project)

# About The Project

Blanja is an E-Commerce website to make it easier for users to buy clothes online, users can view, search, and buy clothes as desired, this website also has features to manage products that have been uploaded by each seller.

## Built With

These are the libraries used for building this frontend

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Sweetalert2](https://sweetalert2.github.io)
- [Axios](https://axios-http.com)
- [Redux](https://redux.js.org)

# Getting Started

## Prerequisites

You'll need these programs installed before proceeding to installation

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download)

This project requires [blanja-backend](https://github.com/alifankebima/blanja-backend) to function properly, follow the steps provided in the readme to install and run the backend API

## Installation

Follow this steps to run the server locally

1. Clone this repository

```sh
git clone https://github.com/alifankebima/blanja-frontend.git
```

2. Change directory to blanja-frontend

```sh
cd blanja-frontend
```

3. Install all of the required modules

```sh
npm install
```

4. Create and configure `.env` file in the root directory, example env are provided in [.env.example](./.env.example)

```env
REACT_APP_API_URL=[ Backend URL ]
```

5. Run this command to run the server

```sh
npm start
```

- Run this command to build this website into production ready

```sh
npm build
```

# Screenshots

<table>
 <tr>
    <td><img width="350px" src="./docs/readme/landing-page.png" border="0" alt="Landing Page" /></td>
    <td> <img width="350px" src="./docs/readme/product-detail.png" border="0"  alt="Product Detail" /></td>
  </tr>
   <tr>
    <td>Landing Page</td>
    <td>Product Detail</td>
  </tr>
   <tr>
    <td><img width="350px" src="./docs/readme/login.png" border="0" alt="Login" /></td>
    <td><img width="350px" src="./docs/readme/register.png" border="0" alt="Register" /> </td>
  </tr>
   <tr>
    <td>Login</td>
    <td>Register</td>
  </tr>
  <tr>
    <td><img width="350px" src="./docs/readme/seller-profile.png" border="0" alt="Seller Profile" /> </td>
     <td><img width="350px" src="./docs/readme/my-product.png" border="0" alt="My Product" /></td>
  </tr>
   <tr>
    <td>Seller Profile</td>
     <td>My Product</td>
  </tr>
</table>

# Related Project

:rocket: [`Frontend Blanja`](https://github.com/alifankebima/blanja-frontend)

:rocket: [`Backend Blanja`](https://github.com/alifankebima/blanja-backend)

:rocket: [`Demo Blanja`](https://blanja-frontend-alifankebima.vercel.app)
