import React, { useEffect, useState } from "react";

import { Row, Col, Spinner, Alert } from "react-bootstrap";
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

    useEffect(() => {
        const fetchCustomTasks = async () => {
            try {
                const { data } = await axiosReq.get("/custom_tasks");
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
                        "An error occurred. Please try again or navigate to another page.",
                }));
            }
        };
        setIsLoaded(false);
        fetchCustomTasks();
    }, [filter]);

    return isLoaded ? (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2 px-1 text-center" lg={8}>
                <h1 className="my-4">My Custom Tasks</h1>
                <Link to="/customtasks/create">
                    <div
                        className={`${buttonStyles.Button} ${buttonStyles.Wide} my-3`}>
                        Create New Custom Task
                    </div>
                </Link>
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
