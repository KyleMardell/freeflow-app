import React from "react";
import styles from "../styles/UserImage.module.css";

const UserImage = ({ src, height = 45, text }) => {
    return (
        <span>
            <img
                className={styles.UserImage}
                src={src}
                height={height}
                width={height}
                alt="User profile"
            />
            {text}
        </span>
    );
};

export default UserImage;
