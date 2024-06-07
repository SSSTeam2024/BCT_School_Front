import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { Link } from 'react-router-dom';

import productImg1 from "../../../assets/images/products/img-1.png";
import productImg2 from "../../../assets/images/products/img-2.png";
import productImg3 from "../../../assets/images/products/img-3.png";
import productImg5 from "../../../assets/images/products/img-5.png";

const OrdersOverview = () => {

   document.title = "All Sub-Contractors | Bouden Coach Travel";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="All Sub-Contractors " pageTitle="Sub-Contractor" />
<h1>All Sub-Contractors </h1>
                
                </Container>
            </div>
        </React.Fragment >
    );
}

export default OrdersOverview;