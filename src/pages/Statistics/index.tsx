import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import BreadCrumb from 'Common/BreadCrumb';

import { IncomeStatisticsCharts, PurchaseCharts, TopSellingProductCharts, OrdersbyCountriesCharts } from './StatisticsCharts';

const Statistics = () => {

    document.title = "Email Templates | Bouden Coach Travel";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Email Templates" pageTitle="Dashboard" />
                   <h1>Email Templates</h1>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Statistics
