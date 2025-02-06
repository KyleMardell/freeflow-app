import React from "react";
import { Button, Carousel, Col, Image, Row } from "react-bootstrap";

import buttonStyles from "../../styles/Button.module.css";
import styles from "../../styles/LandingPage.module.css";

import logo from "../../assets/title-logo.png";
import listTip from "../../assets/projects-tip.png";
import projectTip from "../../assets/project-details-tip.png";
import reportTip from "../../assets/report-tip.png";
import createProjectTip from "../../assets/create-project-tip.png";
import createTaskTip from "../../assets/create-task-tip.png";
import customTaskFirstTip from "../../assets/custom-task-tip.png";
import customTaskUpdatedTip from "../../assets/custom-task-updated-tip.png";

const LandingPage = () => {
    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="p-2 my-5 text-center" xs={12} lg={8}>
                <Image className={styles.Logo} src={logo} fluid alt="Welcome to free flow, the go-to freelance tracker."/>
            </Col>
            <Col className="p-2 my-4 text-center" xs={12} lg={8}>
                <Carousel fade>
                    <Carousel.Item>
                        <Image src={listTip} fluid alt="project list tip" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image src={projectTip} fluid alt="project page tip" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image src={reportTip} fluid alt="report page tip" />
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col className="p-2 mt-1 text-center" xs={12} lg={8}>
                <Button
                    className={`${buttonStyles.Button} ${buttonStyles.ButtonLarge}`}>
                    Join Now
                </Button>
            </Col>
            <Col className="p-2 my-5" xs={12} lg={8}>
                <h2>All-in-One Freelance Project Tracker</h2>
                <p>
                    Free Flow is a powerful yet easy-to-use tool designed for
                    freelancers to track projects effortlessly. Manage multiple
                    projects and tasks, create reusable custom tasks, and
                    generate insightful reports with auto-generated
                    statistics—all in one place.
                </p>
            </Col>
            <Col className="p-2 my-1 text-center" xs={12} lg={8}>
                <Carousel fade>
                    <Carousel.Item>
                        <Image src={createProjectTip} fluid alt="create project tip" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image src={createTaskTip} fluid alt="crete task tip" />
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col className="p-2 my-5" xs={12} lg={8}>
                <h2>Stay on Top of Every Project</h2>
                <p>
                    Free Flow is perfect for freelancers, small business owners,
                    and professionals managing client work or personal projects.
                    Whether you're tracking design work, development tasks,
                    consulting jobs, or any time-based project, Free Flow helps
                    you stay on top of deadlines, budgets, and performance with
                    detailed reports and smart task tracking.
                </p>
            </Col>
            <Col className="p-2 my-1 text-center" xs={12} lg={8}>
                <Button
                    className={`${buttonStyles.Button} ${buttonStyles.ButtonLarge}`}>
                    Sign Up
                </Button>
            </Col>
            <Col className="p-2 mt-5 mb-3 text-center" xs={12} lg={8}>
                <Carousel fade>
                    <Carousel.Item>
                        <Image src={customTaskFirstTip} fluid alt="custom task tip one" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image src={customTaskUpdatedTip} fluid alt="custom task tip two" />
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col className="p-2 mb-5" xs={12} lg={8}>
                <h2>Track and Optimize Your Workflow</h2>
                <p>
                    Save time with reusable custom tasks that come with a set
                    title, description, and estimated time. Track how often each
                    task is used, along with average, fastest, and longest
                    completion times, helping you streamline recurring work and
                    improve efficiency.
                </p>
            </Col>
        </Row>
    );
};

export default LandingPage;
