import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

import buttonStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const TaskEditForm = () => {
    const [errors, setErrors] = useState({});

    const { pid, tid } = useParams();

    const [taskData, setTaskData] = useState({
        custom_task: null,
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

    const [customTaskData, setCustomTaskData] = useState({});
    const [originalCustomTaskData, setOriginalCustomTaskData] = useState(customTaskData);

    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    `/projects/${pid}/tasks/${tid}`
                );
                const {
                    custom_task,
                    title,
                    description,
                    estimated_time,
                    actual_time,
                    status,
                    due_date,
                } = data;
                setTaskData({
                    custom_task,
                    title,
                    description,
                    estimated_time,
                    actual_time,
                    status,
                    due_date,
                });
            } catch (err) {
                console.log(err);
            }

            try {
                if (custom_task) {
                    const { data } = await axiosReq.get(`/custom_tasks/${custom_task}`);
                    setCustomTaskData(data);
                    setOriginalCustomTaskData(data);
                    console.log(data);
                }
            } catch (err) {
                console.log(err);
            }

        };
        handleMount();
    }, [pid, tid, custom_task]);

    const handleChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value,
        });
    };

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        setTaskData((prevData) => ({ ...prevData, status: newStatus }));
        console.log (actual_time, customTaskData);

        const actualTime = parseFloat(actual_time);
        console.log(actualTime);
    
        if (newStatus === "complete" && customTaskData && actualTime) {
            const { average_time, longest_time, quickest_time, frequency } = originalCustomTaskData;
            console.log(actual_time, longest_time, quickest_time, frequency);

            const frequencyNum = parseFloat(frequency);
            const newFrequency = frequencyNum + 1;
            const averageTimeNum = parseFloat(average_time);
            const longTimeNum = parseFloat(longest_time);
            const quickTimeNum = parseFloat(quickest_time);
            const actualTimeNum = parseFloat(actual_time);
            

            const newAverage = frequencyNum > 0 ? ((frequencyNum * averageTimeNum) + actualTimeNum) / newFrequency : actualTimeNum;
            const newLongest = actualTimeNum > longTimeNum ? actualTimeNum : longTimeNum;
            const newQuickest = actualTimeNum < quickTimeNum ? actualTimeNum : quickTimeNum;

            console.log(newAverage, newFrequency, newLongest, newQuickest);
    
            setCustomTaskData((prevData) => {
                const updatedData = {
                    ...prevData,
                    average_time: newAverage,
                    longest_time: newLongest,
                    quickest_time: newQuickest,
                    frequency: newFrequency,
                };
                console.log("Updated customTaskData:", updatedData);
                return updatedData;
            });
            
        } else if (newStatus === "active") {
            setCustomTaskData(originalCustomTaskData);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("estimated_time", estimated_time);
        formData.append("actual_time", actual_time);
        formData.append("status", status);
        formData.append("due_date", due_date);

        try {
            const { data } = await axiosReq.put(
                `/projects/${pid}/tasks/${tid}`,
                formData
            );
            history.push(`/projects/${pid}/tasks/${data.id}`);
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
                <h1 className="my-4">Edit Task</h1>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Form onSubmit={handleSubmit}>
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

                    <Form.Group>
                        <Form.Label className="px-2">
                            Actual time (hours)
                        </Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            step="0.25"
                            name="actual_time"
                            value={actual_time}
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            Use 0.25 per quarter of an hour
                        </Form.Text>
                    </Form.Group>
                    {errors?.actual_time?.map((message, idx) => (
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
                            onChange={handleStatusChange}>
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
            {custom_task ? (
                <Col className="my-auto p-2" lg={8}>
                    <p>Custom task used: {custom_task}</p>
                </Col>
                ) : (<></>)}
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

export default TaskEditForm;
