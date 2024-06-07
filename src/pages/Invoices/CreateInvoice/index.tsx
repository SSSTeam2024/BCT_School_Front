import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import Flatpickr from "react-flatpickr";
import Select from "react-select";

// Import Images
import logoDark from 'assets/images/logo-dark.png'
import logoLight from 'assets/images/logo-light.png'
import { Link } from 'react-router-dom';

const CreateInvoice = () => {

     document.title = "Offers| Bouden Coach Travel";

    

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                   <Breadcrumb title="Offers" pageTitle="Programming" />
                    <h1>Offers</h1>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default CreateInvoice;