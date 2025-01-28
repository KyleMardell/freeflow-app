import React, { useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";

import buttonStyles from "../../styles/Button.module.css";
import styles from "../../styles/CustomTaskPage.module.css";
import { Row, Col, Button, Modal } from "react-bootstrap";

const CustomTaskPage = () => {
    const { id } = useParams();

    const [customTask, setCustomTask] = useState({
        title: "",
        description: "",
        estimated_time: 0.0,
        average_time: 0.0,
        longest_time: 0.0,
        quickest_time: 0.0,
        frequency: 0,
        created_at: "",
        updated_at: "",
    });
    const {
        title,
        description,
        estimated_time,
        average_time,
        longest_time,
        quickest_time,
        frequency,
        created_at,
        updated_at,
    } = customTask;

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleClose = () => setShowDeleteModal(false);
    const handleShow = () => setShowDeleteModal(true);

    const taskDetails = (
      <>
          <Row className="px-1">
              <Col className={`${styles.DetailBorder}`}>
                  <p>Description: {description ? description : <>No description set</>}</p>
              </Col>
          </Row>
          <Row className="px-1">
              <Col className={`${styles.DetailBorder}`}>
                  <p>Number of uses: {frequency ? frequency : <>No uses yet</>}</p>
              </Col>
          </Row>
          <Row className="px-1">
              <Col className={`${styles.DetailBorder} text-center`}>
                  <p>
                      Estimated time (hours): {estimated_time ? estimated_time : <>No time set</>}
                  </p>
              </Col>
              <Col className={`${styles.DetailBorder} text-center`}>
                  <p>
                      Average time (hours): {average_time ? average_time : <>No time set</>}
                  </p>
              </Col>
          </Row>
          <Row className="px-1">
              <Col className={`${styles.DetailBorder} text-center`}>
                  <p>
                      Quickest time (hours): {quickest_time ? quickest_time : <>No time set</>}
                  </p>
              </Col>
              <Col className={`${styles.DetailBorder} text-center`}>
                  <p>
                      Longest time (hours): {longest_time ? longest_time : <>No time set</>}
                  </p>
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
          
      </>
  );


    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2" xs={12} lg={8}>
                <h1 className="text-center my-4 py-2">Task: {title}</h1>
                {taskDetails}
            </Col>
            <Col className="p-1 d-flex justify-content-around" xs={12} lg={8}>
                <Link>
                    <Button
                        className={`${buttonStyles.Button} ${buttonStyles.ButtonLarge} my-3`}>
                        Edit Task
                    </Button>
                </Link>
                <Button
                    className={`${buttonStyles.Button} ${buttonStyles.ButtonLarge} my-3`}
                    onClick={handleShow}>
                    Delete Task
                </Button>
                <Modal show={showDeleteModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this task?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            className={`${buttonStyles.ButtonYellow} my-3`}
                            onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            className={`${buttonStyles.Button} my-3`}
                            onClick={handleClose}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </Row>
    );
};

export default CustomTaskPage;
