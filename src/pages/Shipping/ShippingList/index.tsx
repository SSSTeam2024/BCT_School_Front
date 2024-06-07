import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';


const ShippingList = () => {

    document.title = "Map Tracking | Bouden Coach Travel";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Map Tracking" pageTitle="Tracking" />
                    <h1>Map Tracking</h1>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ShippingList;