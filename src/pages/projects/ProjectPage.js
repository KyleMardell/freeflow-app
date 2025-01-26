import React, { useEffect, useState } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";

import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";

import styles from "../../styles/ProjectPage.module.css";
import buttonStyles from "../../styles/Button.module.css";

const ProjectPage = () => {
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
                console.log(project);
                console.log(tasks);
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/projects/${id}`);
            history.push('/projects/')
        } catch (err) {
            console.log(err);
        }
    };

    const projectDetails = (
        <>
            <Row>
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
            <Row>
                <Col className={`${styles.DetailBorder} text-center`}>
                    <p>Created {created_at}</p>
                </Col>
                <Col className={`${styles.DetailBorder} text-center`}>
                    <p>Updated {updated_at}</p>
                </Col>
            </Row>
            <Row>
                <Col className={`${styles.DetailBorder}`}>
                    <p>Brief: {brief}</p>
                </Col>
            </Row>
        </>
    );

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="p-4" xs={12} lg={8}>
                <h1 className="text-center my-4 py-2">Project: {title}</h1>
                {projectDetails}
            </Col>
            <Col className="p-1" xs={12} lg={8}>
            <Link to={`/projects/${id}/tasks/create`}>
                    <Button
                        className={`${buttonStyles.Button} ${buttonStyles.Wide} my-3`}>
                        Add task
                    </Button>
                </Link>
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
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </Row>
    );
};

export default ProjectPage;
