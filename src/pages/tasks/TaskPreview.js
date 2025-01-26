import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import styles from "../../styles/TaskPreview.module.css";

const TaskPreview = (props) => {
    const {
        id,
        project_id,
        title,
        description,
        estimated_time,
        actual_time,
        status,
        due_date,
        created_at,
    } = props;

    return (
        <Link to={`/projects/${project_id}/tasks/${id}`}>
            <div className={`${styles.Preview} my-2 mx-0`}>
                <div className="text-center">
                    <h2>{title}</h2>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Status: {status}</span>
                    <span>Created: {created_at}</span>
                    <span>{due_date ? <>Due: {due_date}</> : <></>}</span>
                </div>
            </div>
        </Link>
    );
};

export default TaskPreview;
