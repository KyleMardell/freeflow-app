import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal, Spinner, Alert } from "react-bootstrap";

import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { Link } from "react-router-dom/cjs/react-router-dom";

import appStyles from "../../App.module.css";
import styles from "../../styles/TaskPage.module.css";
import buttonStyles from "../../styles/Button.module.css";

const TaskPage = () => {
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [task, setTask] = useState({});
    const {
        custom_task,
        title,
        description,
        estimated_time,
        actual_time,
        status,
        due_date,
        created_at,
        updated_at,
    } = task;

    const { tid, pid } = useParams();
    const history = useHistory();

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleClose = () => setShowDeleteModal(false);
    const handleShow = () => setShowDeleteModal(true);

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    `/projects/${pid}/tasks/${tid}`
                );
                setTask(data);
                setIsLoaded(true);
            } catch (err) {
                if (err.response?.status !== 401) {
                    setErrors(err.response?.data);
                }
                setIsLoaded(false);
            }
        };
        setIsLoaded(false);
        handleMount();
    }, [pid, tid]);

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/projects/${pid}/tasks/${tid}`);
            history.push(`/projects/${pid}`);
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const taskDetails = (
        <>
            <Row className="px-1">
                <Col className={`${styles.DetailBorder} text-center`}>
                    <p>Due date: {due_date ? due_date : <>No date set</>}</p>
                </Col>
                <Col className={`${styles.DetailBorder} text-center`}>
                    <p>Status: {status}</p>
                </Col>
            </Row>
            <Row className="px-1">
                <Col className={`${styles.DetailBorder} text-center`}>
                    <p>
                        Estimated time (hours):{" "}
                        {estimated_time ? estimated_time : <>No time set</>}
                    </p>
                </Col>
                <Col className={`${styles.DetailBorder} text-center`}>
                    <p>
                        Actual time (hours):{" "}
                        {actual_time ? actual_time : <>No time set</>}
                    </p>
                </Col>
            </Row>
            <Row className="px-1">
                <Col className={`${styles.DetailBorder} text-center`}>
                    <p>Created {created_at}</p>
                </Col>
                <Col className={`${styles.DetailBorder} text-center`}>
                    <p>Updated {updated_at}</p>
                </Col>
            </Row>
            {custom_task ? (
                <Row className="px-1">
                    <Col className={`${styles.DetailBorder}`}>
                        <p>Custom task used: {custom_task}</p>
                    </Col>
                </Row>
            ) : (
                <></>
            )}
            <Row className="px-1">
                <Col className={`${styles.DetailBorder}`}>
                    <p>description: {description}</p>
                </Col>
            </Row>
        </>
    );

    return isLoaded ? (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2" xs={12} lg={8}>
                <h1 className="text-center my-4 py-2">Task: {title}</h1>
                {taskDetails}
            </Col>
            <Col className="p-1 d-flex justify-content-around" xs={12} lg={8}>
                <Link to={`/projects/${pid}/tasks/${tid}/edit`}>
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
                    onClick={() => history.push(`/projects/${pid}`)}>
                    Return to the project
                </Button>
            </Col>
        </Row>
    ) : (
        <Row className={appStyles.LoadingSpinner}>
            <Col className="text-center my-4" lg={8}>
                <Spinner animation="grow" variant="dark" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                {errors.detail && (
                    <Alert variant="warning" className="mt-3">
                        {errors.detail}
                    </Alert>
                )}
            </Col>
        </Row>
    );
};

export default TaskPage;
