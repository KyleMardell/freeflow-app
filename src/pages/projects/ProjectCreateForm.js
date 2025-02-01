import React, { useState } from "react";

import { Form, Button, Alert, Row, Col } from "react-bootstrap";

import buttonStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

const ProjectCreateForm = () => {
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const [projectData, setProjectData] = useState({
        title: "",
        brief: "",
        hourly_rate: 0.0,
        due_date: "",
        status: "draft",
    });
    const { title, brief, hourly_rate, due_date, status } = projectData;

    const handleChange = (event) => {
        setProjectData({
            ...projectData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("brief", brief);
        formData.append("due_date", due_date);
        formData.append("hourly_rate", hourly_rate);
        formData.append("status", status);

        try {
            const { data } = await axiosReq.post("/projects/", formData);
            history.push(`/projects/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const formInputFields = (
        <>
            <Form.Group>
                <Form.Label className="d-none">Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Project title"
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label className="d-none">Brief</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Project brief"
                    name="brief"
                    value={brief}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.brief?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Row>
                <Col xs={12} lg={4}>
                    <Form.Group>
                        <Form.Label className="px-2">Status</Form.Label>
                        <Form.Control
                            as="select"
                            name="status"
                            value={status}
                            onChange={handleChange}>
                            <option value="draft">Draft</option>
                            <option value="active">Active</option>
                            <option value="complete">Complete</option>
                        </Form.Control>
                    </Form.Group>
                    {errors?.status?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                </Col>
                <Col xs={12} lg={4}>
                    <Form.Group>
                        <Form.Label className="px-2">Due Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Select due date"
                            name="due_date"
                            value={due_date}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors?.due_date?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                </Col>
                <Col xs={12} lg={4}>
                    <Form.Group>
                        <Form.Label className="px-2">
                            Hourly Rate (£)
                        </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Hourly rate"
                            min="0"
                            step="0.01"
                            name="hourly_rate"
                            value={hourly_rate}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors?.hourly_rate?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                </Col>
            </Row>
        </>
    );

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="my-auto p-2 text-center" lg={8}>
                <h1 className="my-4">Create a Project</h1>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Form onSubmit={handleSubmit}>
                    {formInputFields}
                    <Button
                        className={`${buttonStyles.Button} ${buttonStyles.Wide}`}
                        type="submit">
                        Submit
                    </Button>
                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert variant="warning" key={idx} className="mt-3">
                            {message}
                        </Alert>
                    ))}
                </Form>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Button
                    className={`${buttonStyles.ButtonYellow} ${buttonStyles.Wide}`}
                    onClick={() => history.goBack()}>
                    Cancel
                </Button>
            </Col>
        </Row>
    );
};

export default ProjectCreateForm;
