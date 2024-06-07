import React, { useState, useMemo, useCallback } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CountUp from 'react-countup';
import TableContainer from "Common/TableContainer";
import { userList } from "Common/data";
import Flatpickr from "react-flatpickr";
import dummyImg from "../../assets/images/users/user-dummy-img.jpg"
import { Link } from 'react-router-dom';

const UsersList = () => {
    document.title = "New Quote | Bouden Coach Travel";
    
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                   <Breadcrumb title="New Quote" pageTitle="Visitors Quote" />
<h1>New Quote</h1>
                </Container >
            </div >
        </React.Fragment >
    );
};

export default UsersList;