import React, { useMemo, useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import TableContainer from "Common/TableContainer";
import { transaction } from "Common/data";
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr";

import americanExpress from "../../../assets/images/ecommerce/payment/american-express.png";
import discover from "../../../assets/images/ecommerce/payment/discover.png";
import paypal from "../../../assets/images/ecommerce/payment/paypal.png";
import visa from "../../../assets/images/ecommerce/payment/visa.png";

const Transactions = () => {

    document.title = "Current Push Job | Bouden Coach Travel";

    

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Current Push Job" pageTitle="Push Jobs" />
<h1>Current Push Job</h1>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Transactions;