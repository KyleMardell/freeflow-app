import React, { useEffect, useState } from "react";
import { Col, Row, Button, Modal, Spinner, Alert } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";

import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";

import styles from "../../styles/ProjectPage.module.css";
import buttonStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import TaskPreview from "../../components/TaskPreview";

const ProjectPage = () => {
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();
    const [project, setProject] = useState({});
    const { title, brief, hourly_rate, due_date, created_at, updated_at } =
        project;
    const [tasks, setTasks] = useState([]);

    const history = useHistory();

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleClose = () => setShowDeleteModal(false);
    const handleShow = () => setShowDeleteModal(true);

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: project }, { data: tasks }] = await Promise.all([
                    axiosReq.get(`/projects/${id}`),
                    axiosReq.get(`/projects/${id}/tasks`),
                ]);
                setProject(project);
                setTasks(tasks);
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
    }, [id]);

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/projects/${id}`);
            history.push("/projects/");
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const projectDetails = (
        <>
            <Row className="px-1">
                <Col className={`${styles.DetailBorder} text-center`}>
                    <p>Due date: {due_date ? due_date : <>No date set</>}</p>
                </Col>
                <Col className={`${styles.DetailBorder} text-center`}>
                    <p>
                        Hourly rate:{" "}
                        {hourly_rate ? hourly_rate : <>No rate set</>}
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
            <Row className="px-1">
                <Col className={`${styles.DetailBorder}`}>
                    <p>Brief: {brief}</p>
                </Col>
            </Row>
        </>
    );

    return isLoaded ? (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2" xs={12} lg={8}>
                <h1 className="text-center my-4 py-2">Project: {title}</h1>
                {projectDetails}
            </Col>
            <Col className="px-1" xs={12} lg={8}>
                <Link to={`/projects/${id}/tasks/create`}>
                    <Button
                        className={`${buttonStyles.Button} ${buttonStyles.Wide} my-3`}>
                        Add task
                    </Button>
                </Link>
            </Col>
            <Col className="px-1" xs={12} lg={8}>
                <Link to={`/projects/${id}/report`}>
                    <Button
                        className={`${buttonStyles.Button} ${buttonStyles.Wide} my-3`}>
                        Generate Report
                    </Button>
                </Link>
            </Col>
            <Col className="py-2 px-1 text-center" xs={12} lg={8}>
                {tasks.length ? (
                    tasks.map((task) => {
                        return <TaskPreview key={task.id} {...task} />;
                    })
                ) : (
                    <div>No tasks yet...</div>
                )}
            </Col>
            <Col className="p-1 d-flex justify-content-around" xs={12} lg={8}>
                <Link to={`/projects/${id}/edit`}>
                    <Button
                        className={`${buttonStyles.Button} ${buttonStyles.ButtonLarge} my-3`}>
                        Edit Project
                    </Button>
                </Link>
                <Button
                    className={`${buttonStyles.Button} ${buttonStyles.ButtonLarge} my-3`}
                    onClick={handleShow}>
                    Delete Project
                </Button>
                <Modal show={showDeleteModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this project?
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
                    onClick={() => history.push("/projects")}>
                    Return to My Projects
                </Button>
            </Col>
        </Row>
    ) : (
        <Row className={appStyles.LoadingSpinner}>
            <Col className="text-center" lg={8}>
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

export default ProjectPage;
