import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosReq } from "../../api/axiosDefaults";
import ProjectPreview from "../../components/ProjectPreview";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Spinner, Alert } from "react-bootstrap";

import buttonStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/useRedirect";

const ProjectsPage = ({ filter = "" }) => {
    useRedirect("loggedOut");
    const [projects, setProjects] = useState([]);
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axiosReq.get("/projects");
                setProjects(data);
                setIsLoaded(true);
            } catch (err) {
                setIsLoaded(false);
                if (err.response?.status !== 401) {
                    setErrors(err.response?.data);
                }
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    customError: "An error occurred."
                }));
            }
        };
        setIsLoaded(false);
        fetchProjects();
    }, [filter]);

    return isLoaded ? (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2 px-1 text-center" lg={8}>
                <h1 className="my-4">My Projects</h1>
                <Link to="/projects/create">
                    <div
                        className={`${buttonStyles.Button} ${buttonStyles.Wide} my-3`}>
                        Create New Project
                    </div>
                </Link>
                {projects.length ? (
                    projects.map((project) => {
                        if (project.status !== "complete") {
                            return (
                                <ProjectPreview key={project.id} {...project} />
                            );
                        } else {
                            return <div key={project.id}></div>;
                        }
                    })
                ) : (
                    <div>No projects yet...</div>
                )}
            </Col>
        </Row>
    ) : (
        <Row className={appStyles.LoadingSpinner}>
            <Col className="text-center" lg={8}>
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

export default ProjectsPage;
