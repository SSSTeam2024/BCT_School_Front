import React , { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CountUp from "react-countup";
import ListViewTable from './listViewTable';
import Flatpickr from "react-flatpickr";

const OrdersListView = () => {

    document.title = "New Applications | Bouden Coach Travel";


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                   <Breadcrumb title="New Applications" pageTitle="Sub-Contractor" />
<h1>New Applications</h1>
                </Container>
            </div>
        </React.Fragment >
    );
}

export default OrdersListView;