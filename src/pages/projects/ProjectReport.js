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
    const [taskReports, setTaskReports] = useState([]);

    const [actualTotalHours, setActualTotalHours] = useState(0.0);
    const [estimatedTotalHours, setEstimatedTotalHours] = useState(0.0);
    const [totalActualCost, setTotalActualCost] = useState(0.0);
    const [totalEstimatedCost, setTotalEstimatedCost] = useState(0.0);

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

    useEffect(() => {
        const costingReport = (tasks, hourly_rate) => {
            let actualTotalHrs = 0.0;
            let estimatedTotalHrs = 0.0;
            let estimatedCost = 0.0;
            let actualCost = 0.0;
            const rate = parseFloat(hourly_rate) || 0;

            const newTaskReports = tasks.map((task) => {
                const actualHours = parseFloat(task.actual_time) || 0;
                const estimatedHours = parseFloat(task.estimated_time) || 0;

                actualTotalHrs += actualHours;
                estimatedTotalHrs += estimatedHours;

                return {
                    id: task.id,
                    title: task.title,
                    actual_time: actualHours,
                    estimated_time: estimatedHours,
                    actual_cost: actualHours * rate,
                    estimated_cost: estimatedHours * rate,
                };
            });

            if (rate > 0) {
                actualCost = rate * actualTotalHrs;
                estimatedCost = rate * estimatedTotalHrs;
            }

            setTaskReports(newTaskReports);
            setActualTotalHours(actualTotalHrs);
            setEstimatedTotalHours(estimatedTotalHrs);
            setTotalActualCost(actualCost);
            setTotalEstimatedCost(estimatedCost);
        };

        if (tasks.length > 0) {
            costingReport(tasks, hourly_rate);
        }
    }, [hourly_rate, tasks]);

    return (
        <>
            <Row className="d-flex justify-content-center p-2">
                <Col className="py-2" xs={12} lg={8}>
                    <h1 className="text-center my-4 py-2">Project Report</h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center p-1">
                <Col className="px-1" xs={12} lg={8}>
                    <h2>{title}</h2>
                </Col>
                <Col className="px-1" xs={12} lg={8}>
                    <p>Rate: £{hourly_rate}</p>
                    <p>Brief: {brief}</p>
                </Col>
                <Col className="px-1" xs={12} lg={8}>
                    <Row>
                        <Col>
                            <p className="m-0 mb-1">Estimated time: {estimatedTotalHours} hours</p>
                        </Col>
                        <Col>
                            <p className="m-0 mb-1">Actual time: {actualTotalHours} hours</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="m-0 mb-1">Estimated cost: £{totalEstimatedCost}</p>
                        </Col>
                        <Col>
                            <p className="m-0 mb-1">Actual cost: £{totalActualCost}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="d-flex justify-content-center p-1">
                <Col className="px-1 py-4" xs={12} lg={8}>
                    <h3>Task Reports</h3>
                </Col>

                {taskReports ? (
                    taskReports.map((report) => {
                        return (
                            <Col className="p-1" xs={12} lg={8} key={report.id}>
                                <h4 className="m-0">{report.title}</h4>
                                <Row>
                                    <Col>
                                        <p className="m-0 mb-1">Est time: {report.estimated_time} hrs</p>
                                    </Col>
                                    <Col>
                                        <p className="m-0 mb-1">Est cost: £{report.estimated_cost}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="m-0 mb-1">Total time: {report.actual_time}</p>
                                    </Col>
                                    <Col>
                                        <p className="m-0 mb-1">Total cost: ${report.actual_cost}</p>
                                    </Col>
                                </Row>
                            </Col>
                        );
                    })
                ) : (
                    <Col>
                        <p>No task reports </p>
                    </Col>
                )}
            </Row>

            <Row className="d-flex justify-content-center my-2">
                <Col
                    className="p-1 d-flex justify-content-center align-items-center"
                    xs={3}
                    lg={2}>
                    <UserImage src={image} />
                </Col>
                <Col className="px-1" xs={9} lg={6}>
                    <p className="m-0 p-1">
                        {name} - {bio}
                    </p>
                    <p className="m-0 p-1">
                        Email: {email} | Phone: {phone}
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default ProjectReport;
