import React from "react";
import { Col, Row } from "react-bootstrap";

const NotFound = () => {
    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2 px-1 text-center" lg={8}>
                <h1 className="my-4">404 - Page Not Found</h1>
            </Col>
            <Col className="py-2 px-1 text-center" lg={8}>
                <p className="my-4">Oops. This page does not exist.</p>
            </Col>
        </Row>
    );
};

export default NotFound;
