import React, { useState } from "react";

import { Form, Button, Row, Col, Alert } from "react-bootstrap";

import buttonStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

const CustomTaskCreateForm = () => {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const [customTask, setCustomTask] = useState({
        title: "",
        description: "",
        estimated_time: 0.0,
    });

    const { title, description, estimated_time } = customTask;

    const handleChange = (event) => {
        setCustomTask({
            ...customTask,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("estimated_time", parseFloat(estimated_time));

        try {
            const { data } = await axiosReq.post("/custom_tasks/", formData);
            history.push(`/customtasks/${data.id}`);
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
            setErrors((prevErrors) => ({
                ...prevErrors,
                customError:
                    "An error occurred. Please try again or navigate to another page.",
            }));
        }
    };

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="my-auto p-2 text-center" lg={8}>
                <h1 className="my-4">Create a Custom Task</h1>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Custom Task Title"
                            name="title"
                            value={title}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors?.title?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Custom Task Description"
                            name="description"
                            value={description}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors?.description?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}

                    <Form.Group>
                        <Form.Label>Estimated time (hours)</Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            step="0.25"
                            name="estimated_time"
                            value={estimated_time}
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            Use 0.25 per quarter of an hour
                        </Form.Text>
                    </Form.Group>
                    {errors?.estimated_time?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}

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
                    {errors?.detail ? (
                        <Alert variant="warning" className="mt-3">
                            {errors.detail}
                        </Alert>
                    ) : null}
                    {errors?.customError ? (
                        <Alert variant="warning" className="mt-3">
                            {errors.customError}
                        </Alert>
                    ) : null}
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

export default CustomTaskCreateForm;
