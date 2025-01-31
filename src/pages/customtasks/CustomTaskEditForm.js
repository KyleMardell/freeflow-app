import React, { useEffect, useState } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";

import buttonStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";

import { axiosReq } from "../../api/axiosDefaults";

const CustomTaskEditForm = () => {
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
                console.log(data);
            } catch (err) {
                console.log(err.response.data);
            }
        };
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
            console.log(err.response);
        }
    };

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="my-auto p-2 text-center" lg={8}>
                <h1 className="my-4">Edit Custom Task</h1>
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

                    <Button
                        className={`${buttonStyles.Button} ${buttonStyles.Wide}`}
                        type="submit">
                        Submit
                    </Button>
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

export default CustomTaskEditForm;
