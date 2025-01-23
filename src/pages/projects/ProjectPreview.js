import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ProjectPreview = (props) => {
    const { title, due_date, status, updated_at } = props;

    return (
        <div className="py-2">
            <div className="d-flex justify-content-between">
                <h2>{title}</h2>
                <Link >
                    <button className="rounded">View Project</button>
                </Link>
            </div>
            <div className="d-flex justify-content-between">
                <span>Status: {status}</span>
                <span>Updated: {updated_at}</span>
                <span>{due_date ? <>Due: { due_date }</> : <></>}</span>
            </div>
            
            
        </div>
    );
};

export default ProjectPreview;
