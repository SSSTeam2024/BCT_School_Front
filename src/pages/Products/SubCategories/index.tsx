import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import SubCategoriesTable from './subCategoriesTable';

const SubCategories = () => {

    document.title = "Companies | Bouden Coach Travel";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Companies" pageTitle="Corporate" />
<h1>Companies</h1>
                </Container>
            </div >
        </React.Fragment >
    );
}

export default SubCategories;