import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';

// Import Images
import logoDark from 'assets/images/logo-dark.png'
import logoLight from 'assets/images/logo-light.png'
import { Link } from 'react-router-dom';

const InvoiceDetails = () => {

    document.title = "Scheduling| Bouden Coach Travel";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Scheduling" pageTitle="Programming" />
                    <h1>Scheduling</h1>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default InvoiceDetails;