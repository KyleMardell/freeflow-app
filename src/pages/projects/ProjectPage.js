import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import styles from "../../styles/ProjectPage.module.css";

const ProjectPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const { title, brief, hourly_rate, due_date, created_at, updated_at } =
        project;
    const [tasks, setTasks] = useState([]);

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

    const projectDetails = (
        <div>
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
        </div>
    );

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2" lg={8}>
                <h1 className="text-center my-4 py-2">Project: {title}</h1>
                {projectDetails}
            </Col>
        </Row>
    );
};

export default ProjectPage;
