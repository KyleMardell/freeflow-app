import React from "react";

import { Form, Button } from "react-bootstrap";


const ProjectCreateForm = () => {
    return (
        <Form>

            <Form.Group controlId="projectTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Project title" />
            </Form.Group>

            <Form.Group controlId="projectBrief">
                <Form.Label>Brief</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Project brief" />
            </Form.Group>

            <Form.Group controlId="projectStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" defaultValue="draft" >
                    <option value="draft">Draft</option>
                    <option value="active">Active</option>
                    <option value="complete">Complete</option>
                </Form.Control>
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="projectDueDate">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type="date" placeholder="Select due date"  />
              </Form.Group>

              <Form.Group controlId="projectHourlyRate">
                  <Form.Label>Hourly Rate (£)</Form.Label>
                  <Form.Control type="number" placeholder="Hourly rate" min="0" step="0.01" />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    );
};

export default ProjectCreateForm;
