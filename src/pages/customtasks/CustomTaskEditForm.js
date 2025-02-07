import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";

import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";

import appStyles from "../../App.module.css";
import buttonStyles from "../../styles/Button.module.css";

import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

const CustomTaskEditForm = () => {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();

    const { id } = useParams();

    const [customTask, setCustomTask] = useState({
        title: "",
        description: "",
        estimated_time: 0.0,
    });

    const { title, description, estimated_time } = customTask;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/custom_tasks/${id}`);
                setCustomTask(data);
                setIsLoaded(true);
            } catch (err) {
                setIsLoaded(false);
                if (err.response?.status !== 401) {
                    setErrors(err.response?.data);
                }
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    customError:
                        "An error occurred.",
                }));
            }
        };
        setIsLoaded(false);
        handleMount();
    }, [id]);

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
            const { data } = await axiosReq.put(
                `/custom_tasks/${id}`,
                formData
            );
            history.push(`/customtasks/${data.id}`);
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
            setErrors((prevErrors) => ({
                ...prevErrors,
                customError:
                    "An error occurred.",
            }));
        }
    };

    return isLoaded ? (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="my-auto p-2 text-center" lg={8}>
                <h1 className="my-4">Edit Custom Task</h1>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="title">Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Custom Task Title"
                            id="title"
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
                        <Form.Label htmlFor="description">Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Custom Task Description"
                            id="description"
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
                        <Form.Label htmlFor="estimated_time">Estimated time (hours)</Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            step="0.25"
                            id="estimated_time"
                            name="estimated_time"
                            value={estimated_time}
                            onChange={handleChange}
                        />
                        <Form.Text>
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
    ) : (
        <Row className={appStyles.LoadingSpinner}>
            <Col className="text-center my-4" lg={8}>
                <Spinner animation="grow" variant="dark" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
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
            </Col>
        </Row>
    );
};

export default CustomTaskEditForm;
