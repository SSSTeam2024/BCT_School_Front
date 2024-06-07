import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CurrencyTable from './currencyTable';

const CurrencyRates = () => {

    document.title = "Push Job History | Bouden Coach Travel";

    

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Push Job History" pageTitle="Push Jobs" />
<h1>Push Job History</h1>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default CurrencyRates;