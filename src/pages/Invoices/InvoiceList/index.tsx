import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CountUp from 'react-countup';
import InvoiceListTable from './InvoiceListTable';

const InvoiceList = () => {

    document.title = "Listing & Management | Bouden Coach Travel";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Listing & Management" pageTitle="Invoices" />
<h1>Listing & Management</h1>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default InvoiceList;