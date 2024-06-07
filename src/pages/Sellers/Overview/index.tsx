import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import profilebgImg from "../../../assets/images/profile-bg.jpg";
import companyImg3 from "../../../assets/images/companies/img-3.png"

import avatar1 from "../../../assets/images/users/avatar-1.jpg";

import productsImg1 from "../../../assets/images/products/img-1.png";
import productsImg4 from "../../../assets/images/products/img-4.png";
import productsImg5 from "../../../assets/images/products/img-5.png";
import productsImg6 from "../../../assets/images/products/img-6.png";
import productsImg7 from "../../../assets/images/products/img-7.png";
import productsImg8 from "../../../assets/images/products/img-8.png";
import productsImg9 from "../../../assets/images/products/img-9.png";
import productsImg11 from "../../../assets/images/products/img-11.png";
import productsImg14 from "../../../assets/images/products/img-14.png";
import productsImg15 from "../../../assets/images/products/img-15.png";
import { Link } from 'react-router-dom';
import Breadcrumb from 'Common/BreadCrumb';


const SellersOverview = () => {

    document.title = "Stations| Bouden Coach Travel";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                   <Breadcrumb title="Stations" pageTitle="Programming" />
                    <h1>Stations</h1>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default SellersOverview;