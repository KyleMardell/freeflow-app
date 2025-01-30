import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import UserImage from "../../components/UserImage";

const ProjectReport = ({ profile_id }) => {
    const [profile, setProfile] = useState({});
    const { name, bio, image, email, phone } = profile;
    const [project, setProject] = useState({});
    const { title, brief, hourly_rate } = project;
    const [tasks, setTasks] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: profile }, { data: project }, { data: tasks }] =
                    await Promise.all([
                        axiosReq.get(`/profiles/${profile_id}`),
                        axiosReq.get(`/projects/${id}`),
                        axiosReq.get(`/projects/${id}/tasks`),
                    ]);
                setProfile(profile);
                setProject(project);
                setTasks(tasks);
                console.log(profile, project, tasks);
            } catch (err) {
                console.log(err.response.data);
            }
        };
        handleMount();
    }, [id, profile_id]);

    return (
        <>
            <Row className="d-flex justify-content-center">
                <Col className="py-2" xs={12} lg={8}>
                    <h1 className="text-center my-4 py-2">Project Report</h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col className="px-1" xs={12} lg={8}>
                    <h2>{title}</h2>
                </Col>
                <Col className="px-1" xs={12} lg={8}>
                    <p>Rate: £{hourly_rate}</p>
                    <p>Brief: {brief}</p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
            <Col className="px-1 d-flex justify-content-center align-items-center" xs={3} lg={2}>
                    <UserImage src={image} />
                </Col>
                <Col className="px-1" xs={9} lg={6}>
                    <p className="m-0 p-1">{name} - {bio}</p>
                    <p className="m-0 p-1">Email: {email} | Phone: {phone}</p>
                </Col>
            </Row>
        </>
    );
};

export default ProjectReport;
