import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosReq } from "../../api/axiosDefaults";
import ProjectPreview from "../../components/ProjectPreview";

const ProjectsArchivePage = ({ filter = "" }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axiosReq.get("/projects");
                console.log(data);
                setProjects(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProjects();
    }, [filter]);

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2 text-center" lg={8}>
                <h1 className="my-4">Project Archive</h1>

                {projects.length ? (
                    projects.map((project) => {
                        if (project.status === "complete") {
                            return (
                                <ProjectPreview key={project.id} {...project} />
                            );
                        } else {
                            return <div key={project.id}></div>;
                        }
                    })
                ) : (
                    <div>No completed projects yet...</div>
                )}
            </Col>
        </Row>
    );
};

export default ProjectsArchivePage;
