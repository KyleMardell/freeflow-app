import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import { Row, Col } from "react-bootstrap";

import styles from "../../styles/TaskPage.module.css";

const TaskPage = () => {
    const { tid, pid } = useParams();
    const [task, setTask] = useState({});

    const {
        id,
        project,
        custom_task,
        title,
        description,
        estimated_time,
        actual_time,
        status,
        due_date,
        created_at,
        updated_at,
    } = task;

    const taskDetails = (
      <>
          <Row className="px-1">
              <Col className={`${styles.DetailBorder} text-center`}>
                  <p>Due date: {due_date ? due_date : <>No date set</>}</p>
              </Col>
              <Col className={`${styles.DetailBorder} text-center`}>
                  <p>Status: {status}</p>
              </Col>
          </Row>
          <Row className="px-1">
              <Col className={`${styles.DetailBorder} text-center`}>
                  <p>Estimated time (hours): {estimated_time ? estimated_time : <>No time set</>}</p>
              </Col>
              <Col className={`${styles.DetailBorder} text-center`}>
                  <p>Actual time (hours): {actual_time ? actual_time : <>No time set</>}</p>
              </Col>
          </Row>
          <Row className="px-1">
              <Col className={`${styles.DetailBorder} text-center`}>
                  <p>Created {created_at}</p>
              </Col>
              <Col className={`${styles.DetailBorder} text-center`}>
                  <p>Updated {updated_at}</p>
              </Col>
          </Row>
          <Row className="px-1">
              <Col className={`${styles.DetailBorder}`}>
                  <p>description: {description}</p>
              </Col>
          </Row>
      </>
  );

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2" xs={12} lg={8}>
              <h1 className="text-center my-4 py-2">Task: {title}</h1>
            </Col>
        </Row>
    );
};

export default TaskPage;
