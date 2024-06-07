import React, { useState } from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr";

import avatar2 from "../../../assets/images/users/avatar-2.jpg"
import ListViewTable from './listViewTable';

const SellersListView = () => {

     document.title = "New Contract | Bouden Coach Travel";

    

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                     <Breadcrumb title="New Contract" pageTitle="Visitors Quote" />
                   <h1>New Contract</h1>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default SellersListView;