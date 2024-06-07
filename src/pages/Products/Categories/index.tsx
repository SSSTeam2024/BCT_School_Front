import React, { useState, useEffect, useMemo } from 'react';
import { Button, Card, Col, Container, Form, Offcanvas, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from 'Common/BreadCrumb';
import { categoryListData } from 'Common/data';

const Categories = () => {

    document.title = "Schools | Bouden Coach Travel";


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Schools" pageTitle="Corporate" />
<h1>Schools</h1>
                </Container>
            </div>


        </React.Fragment >

    );
}

export default Categories;