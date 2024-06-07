import React, { useState, useMemo } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import TableContainer from "Common/TableContainer";
import { shipments } from "Common/data";
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr";

const Shipments = () => {

    document.title = "Delays&Changes | Bouden Coach Travel";


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Delays&Changes" pageTitle="Tracking" />
                    <h1>Delays & Changes</h1>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Shipments;