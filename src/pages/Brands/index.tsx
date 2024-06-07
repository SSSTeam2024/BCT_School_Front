import BreadCrumb from 'Common/BreadCrumb';
import React from 'react'
import { Container, Row } from 'react-bootstrap';

import img1 from "assets/images/brands/img-1.png";
import img2 from "assets/images/brands/img-2.png";
import img3 from "assets/images/brands/img-3.png";
import img4 from "assets/images/brands/img-4.png";
import img5 from "assets/images/brands/img-5.png";
import img6 from "assets/images/brands/img-6.png";
import img7 from "assets/images/brands/img-7.png";
import img8 from "assets/images/brands/img-8.png";
import img9 from "assets/images/brands/img-9.png";
import img10 from "assets/images/brands/img-10.png";
import img11 from "assets/images/brands/img-11.png";
import img12 from "assets/images/brands/img-12.png";
import img13 from "assets/images/brands/img-13.png";
import img14 from "assets/images/brands/img-14.png";
import BrandsTable from './BrandsTable';

const Brands = () => {

    document.title = "Reporting Management | Bouden Coach Travel";

  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BreadCrumb title="Reporting Management" pageTitle="Dashboard" />
                <h1>Reporting Management</h1>
            </Container>
        </div>
    </React.Fragment>
  )
}

export default Brands;
