import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import styles from "../styles/TaskPreview.module.css";

const CustomTaskPreview = (props) => {
    
    const {
        id,
        title,
        estimated_time,
        average_time,
        frequency,
    } = props;

    return (
        <Link to={`/customtasks/${id}`}>
            <div className={`${styles.Preview} my-2 mx-0`}>
                
                <div className="text-center">
                    <h2>{title}</h2>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Estimated: {estimated_time}</span>
                    <span>Average: {average_time}</span>
                    <span>Uses: {frequency}</span>
                </div>
            </div>
        </Link>
    );
};

export default CustomTaskPreview;
