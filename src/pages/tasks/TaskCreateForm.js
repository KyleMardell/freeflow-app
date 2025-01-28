import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

import buttonStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const TaskCreateForm = () => {
    const [errors, setErrors] = useState({});

    const { id } = useParams();

    const [taskData, setTaskData] = useState({
        custom_task: "",
        title: "",
        description: "",
        estimated_time: 0.0,
        actual_time: 0.0,
        status: "active",
        due_date: "",
    });
    const {
        custom_task,
        title,
        description,
        estimated_time,
        actual_time,
        status,
        due_date,
    } = taskData;

    const [customTaskData, setCustomTaskData] = useState([]);

    const history = useHistory();

    useEffect(() => {
        const fetchCustomTasks = async () => {
            try {
                const { data } = await axiosReq.get("/custom_tasks");
                console.log(data);
                setCustomTaskData(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchCustomTasks();
    }, []);

    const handleCustomTaskImport = (event) => {
        const selectedTask = customTaskData.find(
            (task) => task.id === parseInt(event.target.value)
        );
        if (selectedTask) {
            setTaskData({
                ...taskData,
                custom_task: selectedTask.id,
                title: selectedTask.title,
                description: selectedTask.description,
                estimated_time: selectedTask.estimated_time,
            });
        }
    };

    const handleChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        if (custom_task) {
            formData.append("custom_task", custom_task);
        }

        formData.append("title", title);
        formData.append("description", description);
        formData.append("estimated_time", estimated_time);
        formData.append("actual_time", actual_time);
        formData.append("status", status);
        formData.append("due_date", due_date);

        try {
            const { data } = await axiosReq.post(
                `/projects/${id}/tasks/`,
                formData
            );
            history.push(`/projects/${id}/tasks/${data.id}`);
        } catch (err) {
            console.log(err.response?.data);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="my-auto p-2 text-center" lg={8}>
                <h1 className="my-4">Create a Task</h1>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Import a Custom Task</Form.Label>
                        <Form.Control
                            as="select"
                            value={custom_task}
                            onChange={handleCustomTaskImport}>
                            <option value="" disabled>
                                -- Select a Custom Task --
                            </option>
                            {customTaskData.map((customTask) => (
                                <option key={customTask.id} value={customTask.id}>
                                    {customTask.title}{" "}
                                </option>
                            ))}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecting a custom task will import its title, description and estimated time
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="px-2">Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Task title"
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
                        <Form.Label className="px-2">Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Task description"
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
                        <Form.Label className="px-2">
                            Estimated time (hours)
                        </Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            step="0.1"
                            name="estimated_time"
                            value={estimated_time}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors?.estimated_time?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}

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

                    <Form.Group>
                        <Form.Label className="px-2">Status</Form.Label>
                        <Form.Control
                            as="select"
                            name="status"
                            value={status}
                            onChange={handleChange}>
                            <option value="active">Active</option>
                            <option value="complete">Complete</option>
                        </Form.Control>
                    </Form.Group>
                    {errors?.status?.map((message, idx) => (
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

export default TaskCreateForm;
