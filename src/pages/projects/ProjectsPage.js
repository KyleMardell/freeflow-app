import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosReq } from "../../api/axiosDefaults";
import ProjectPreview from "./ProjectPreview";

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
            <Col className="py-2" lg={8}>
                <h1>Projects List</h1>
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
