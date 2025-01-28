import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosReq } from "../../api/axiosDefaults";
import ProjectPreview from "../../components/ProjectPreview";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Button } from "react-bootstrap";
import buttonStyles from "../../styles/Button.module.css";

const ProjectsPage = ({filter=""}) => {

    const [projects, setProjects] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const {data} = await axiosReq.get('/projects');
                console.log(data);
                setProjects(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };
        setHasLoaded(false);
        fetchProjects();
    }, [filter]);

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2 text-center" lg={8}>
                <h1 className="my-4">My Projects</h1>
                <Link to="/projectscreate">
                    <Button className={`${buttonStyles.Button} ${buttonStyles.Wide} my-3`}>
                        Create New Project
                    </Button>
                </Link>
                {hasLoaded ? (
                    <>
                    {projects.length ? (
                        projects.map((project) => {
                            return (
                                <ProjectPreview key={project.id} {...project} />
                            )
                        })
                    ) : (
                        <div>No projects yet...</div>
                    )}
                    </>
                ) : (
                    <>
                        <div>No projects yet...</div>
                    </>
                )}
            </Col>
        </Row>
    );
};

export default ProjectsPage;
