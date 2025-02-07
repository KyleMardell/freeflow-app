import React, { useEffect, useState } from "react";

import { Row, Col, Spinner, Alert, Form } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import appStyles from "../../App.module.css";
import buttonStyles from "../../styles/Button.module.css";

import CustomTaskPreview from "../../components/CustomTaskPreview";
import { useRedirect } from "../../hooks/useRedirect";

const CustomTasksPage = ({ filter = "" }) => {
    useRedirect("loggedOut");
    const [customTasks, setCustomTasks] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [errors, setErrors] = useState({});
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchCustomTasks = async () => {
            try {
                const { data } = await axiosReq.get(`/custom_tasks/?${filter}search=${query}`);
                setCustomTasks(data);
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
        fetchCustomTasks();
    }, [filter, query]);

    return isLoaded ? (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2 px-1 text-center" lg={8}>
                <h1 className="my-4">My Custom Tasks</h1>
                <p className="mb-5 px-2">
                    Custom tasks are used to track the usage of a task across
                    multiple projects and analyze its actual time taken. When
                    completing a custom task in a project, ensure that the
                    correct "Actual time" is entered, as this data is used to
                    update the custom task's time statistics, including the
                    average, longest, and quickest times taken.
                </p>
                <Link to="/customtasks/create">
                    <div
                        className={`${buttonStyles.Button} ${buttonStyles.Wide} my-5`}>
                        Create New Custom Task
                    </div>
                </Link>

                <Form className="mb-4" onSubmit={(event) => event.preventDefault()}>
                    <Form.Control
                        type="text"
                        placeholder="Search custom tasks..."
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </Form>

                {customTasks.length ? (
                    customTasks.map((task) => {
                        return <CustomTaskPreview key={task.id} {...task} />;
                    })
                ) : (
                    <div>No custom tasks yet...</div>
                )}
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

export default CustomTasksPage;
