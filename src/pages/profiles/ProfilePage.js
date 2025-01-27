import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";

import { Button, Col, Row } from "react-bootstrap";
import UserImage from "../../components/UserImage";

import buttonStyles from "../../styles/Button.module.css";
import styles from "../../styles/ProfilePage.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ProfilePage = ({ profile_id }) => {
    const [profile, setProfile] = useState({});
    const { owner, name, bio, image, email, phone, created_at, updated_at } =
        profile;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/profiles/${profile_id}`);
                setProfile(data);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [profile_id]);

    return (
        <>
            <Row className="d-flex justify-content-center">
                <Col className="text-center my-4" lg={8}>
                    <h1>Profile</h1>
                </Col>
            </Row>
            <Row className="px-1 d-flex justify-content-center">
                <Col className={`${styles.DetailBorder} d-flex p-1`} lg={8}>
                    <div className="d-flex align-items-center justify-content-center">
                      <UserImage src={image} />
                    </div>
                    <div>
                        <p className="p-1 m-0">Username: {owner}</p>
                        <p className="p-1 m-0">Name: {name}</p>
                    </div>
                </Col>
            </Row>
            <Row className="px-1 d-flex justify-content-center">
                <Col className={`${styles.DetailBorder} p-1`} lg={8}>
                    <p className="p-1 m-0">Bio: {bio}</p>
                </Col>
            </Row>
            <Row className="px-1 d-flex justify-content-center">
                <Col className={`${styles.DetailBorder} p-1`} lg={8}>
                    <p className="p-1 m-0">Email: {email}</p>
                </Col>
            </Row>
            <Row className="px-1 d-flex justify-content-center">
                <Col className={`${styles.DetailBorder} p-1`} lg={8}>
                    <p className="p-1 m-0">Phone: {phone}</p>
                </Col>
            </Row>
            <Row className="px-1 d-flex justify-content-center">
                <Col className={`${styles.DetailBorder} p-1`} xs={6} lg={4}>
                    <p className="p-1 m-0">Joined: {created_at}</p>
                </Col>
                <Col className={`${styles.DetailBorder} p-1`}xs={6} lg={4}>
                    <p className="p-1 m-0">Updated: {updated_at}</p>
                </Col>
            </Row>
            <Row className="px-1 my-4 d-flex justify-content-center">
                <Col className="p-0 m-0" lg={8}>
                    <Link to="/profile/edit">
                        <Button
                            className={`${buttonStyles.Button} ${buttonStyles.Wide}`}>
                            Edit Profile
                        </Button>
                    </Link>
                </Col>
            </Row>
        </>
    );
};

export default ProfilePage;
