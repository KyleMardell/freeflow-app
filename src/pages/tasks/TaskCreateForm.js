import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

import buttonStyles from "../../styles/Button.module.css";

const TaskCreateForm = () => {
    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        estimated_time: 0.0,
        actual_time: 0.0,
        status: "active",
        due_date: "",
    });
    const {
        title,
        description,
        estimated_time,
        actual_time,
        status,
        due_date,
    } = taskData;

    const history = useHistory();

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="my-auto p-2 text-center" lg={8}>
                <h1 className="my-4">Create a Task</h1>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Form>
                    <Form.Group>
                        <Form.Label className="px-2">Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Task title"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="px-2">Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Task description"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="px-2">Estimated time</Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            step="0.1"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="px-2">Due Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Select due date"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="px-2">Status</Form.Label>
                        <Form.Control
                            as="select"
                        >
                            <option value="active">Active</option>
                            <option value="complete">Complete</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Button className={`${buttonStyles.Button} ${buttonStyles.Wide}`} type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Button
                    className={`${buttonStyles.Button} ${buttonStyles.Wide}`}
                    onClick={() => history.goBack()}>
                    Cancel
                </Button>
            </Col>
        </Row>
    );
};

export default TaskCreateForm;
