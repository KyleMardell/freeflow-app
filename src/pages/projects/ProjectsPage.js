import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosReq } from "../../api/axiosDefaults";

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
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <h1>Projects List</h1>
                {hasLoaded ? (
                    <>
                    {
                        console.log(projects)
                    }
                    {projects.length ? (
                        projects.map((project) => {
                            return (
                            <div key={project.id}>
                                <p>{project.title}</p>
                                <p>{project.brief}</p>
                            </div>
                            )
                        })
                    ) : (
                        <div>no results 1</div>
                    )}
                    </>
                ) : (
                    <>
                        <div>no results 2</div>
                    </>
                )}
            </Col>
        </Row>
    );
};

export default ProjectsPage;
