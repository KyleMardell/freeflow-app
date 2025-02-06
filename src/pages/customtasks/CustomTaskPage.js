import React, { useEffect, useState } from "react";
import {
    Link,
    useHistory,
    useParams,
} from "react-router-dom/cjs/react-router-dom";

import { Row, Col, Button, Modal, Spinner, Alert } from "react-bootstrap";

import appStyles from "../../App.module.css";
import buttonStyles from "../../styles/Button.module.css";
import styles from "../../styles/CustomTaskPage.module.css";

import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

const CustomTaskPage = () => {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();
    const history = useHistory();

    const [customTask, setCustomTask] = useState({
        title: "",
        description: "",
        estimated_time: 0.0,
        average_time: 0.0,
        longest_time: 0.0,
        quickest_time: 0.0,
        frequency: 0,
        created_at: "",
        updated_at: "",
    });
    const {
        title,
        description,
        estimated_time,
        average_time,
        longest_time,
        quickest_time,
        frequency,
        created_at,
        updated_at,
    } = customTask;

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleClose = () => setShowDeleteModal(false);
    const handleShow = () => setShowDeleteModal(true);

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
                    customError: "An error occurred. Please try again or navigate to another page."
                }));
            }
        };
        setIsLoaded(false);
        handleMount();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/custom_tasks/${id}`);
            history.push("/customtasks");
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
            setErrors((prevErrors) => ({
                ...prevErrors,
                customError: "An error occurred. Please try again."
            }));
        }
    };

    const taskDetails = (
        <>
            <Row className="px-1">
                <Col className={`${styles.DetailBorder} ${styles.BorderTop}`}>
                    <p className="m-0 p-2">
                        Description:{" "}
                        {description ? description : <>No description set</>}
                    </p>
                </Col>
            </Row>
            <Row className="px-1">
                <Col className={`${styles.DetailBorder} ${styles.BorderSecond}`}>
                    <p className="m-0 p-2">
                        Number of uses:{" "}
                        {frequency ? frequency : <>No uses yet</>}
                    </p>
                </Col>
            </Row>
            <Row className="px-1">
                <Col className={`${styles.DetailBorder} ${styles.BorderMid} ${styles.BorderRight} text-center`}>
                    <p className="m-0 p-2">
                        Estimated time (hours):{" "}
                        {estimated_time ? estimated_time : <>No time set</>}
                    </p>
                </Col>
                <Col className={`${styles.DetailBorder} ${styles.BorderMid} text-center`}>
                    <p className="m-0 p-2">
                        Average time (hours):{" "}
                        {average_time ? average_time : <>No time set</>}
                    </p>
                </Col>
            </Row>
            <Row className="px-1">
                <Col className={`${styles.DetailBorder} ${styles.BorderMid} ${styles.BorderRight} text-center`}>
                    <p className="m-0 p-2">
                        Quickest time (hours):{" "}
                        {quickest_time ? quickest_time : <>No time set</>}
                    </p>
                </Col>
                <Col className={`${styles.DetailBorder} ${styles.BorderMid} text-center`}>
                    <p className="m-0 p-2">
                        Longest time (hours):{" "}
                        {longest_time ? longest_time : <>No time set</>}
                    </p>
                </Col>
            </Row>
            <Row className="px-1">
                <Col className={`${styles.DetailBorder} ${styles.BorderRight} ${styles.BorderBottomLeft} text-center`}>
                    <p className="m-0 p-2">Created {created_at}</p>
                </Col>
                <Col className={`${styles.DetailBorder} ${styles.BorderBottomRight} text-center`}>
                    <p className="m-0 p-2">Updated {updated_at}</p>
                </Col>
            </Row>
        </>
    );

    return isLoaded ? (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2" xs={12} lg={8}>
                <h1 className="text-center my-4 py-2">Custom Task: {title}</h1>
                {taskDetails}
            </Col>
            <Col className="p-1 d-flex justify-content-around" xs={12} lg={8}>
                <Link to={`/customtasks/${id}/edit`}>
                    <Button
                        className={`${buttonStyles.Button} ${buttonStyles.ButtonLarge} my-3`}>
                        Edit Task
                    </Button>
                </Link>
                <Button
                    className={`${buttonStyles.Button} ${buttonStyles.ButtonLarge} my-3`}
                    onClick={handleShow}>
                    Delete Task
                </Button>
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
                <Modal show={showDeleteModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this task?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            className={`${buttonStyles.ButtonYellow} my-3`}
                            onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            className={`${buttonStyles.Button} my-3`}
                            onClick={handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Button
                    className={`${buttonStyles.ButtonYellow} ${buttonStyles.Wide}`}
                    onClick={() => history.push("/customtasks")}>
                    Return to Custom Tasks
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

export default CustomTaskPage;
