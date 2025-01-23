import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const ProjectPage = (props) => {
    const {
        title,
        brief,
        hourly_rate,
        status,
        due_date,
        created_at,
        updated_at,
    } = props;


  return (
    <Container>
        <Row>
            <Col>
                <h1>{title}</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default ProjectPage