import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import styles from "../../styles/ProjectPreview.module.css";


const ProjectPreview = (props) => {
    const { id, title, due_date, status, updated_at } = props;


    return (
        <Link to={`/projects/${id}`}>
        <div className={`${styles.Preview} p-2 my-2`}>
            <div className="text-center">
                <h2>{title}</h2>
            </div>
            <div className="d-flex justify-content-between">
                <span>Status: {status}</span>
                <span>Updated: {updated_at}</span>
                <span>{due_date ? <>Due: { due_date }</> : <></>}</span>
            </div>
        </div>
        </Link>
    );
};

export default ProjectPreview;
