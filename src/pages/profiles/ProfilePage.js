import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";

import { Button, Col, Row, Spinner, Alert } from "react-bootstrap";
import UserImage from "../../components/UserImage";

import appStyles from "../../App.module.css";
import buttonStyles from "../../styles/Button.module.css";
import styles from "../../styles/ProfilePage.module.css";

import { Link } from "react-router-dom/cjs/react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";

const ProfilePage = ({ profile_id }) => {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [profile, setProfile] = useState({});
    const { owner, name, bio, image, email, phone, created_at, updated_at } =
        profile;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/profiles/${profile_id}`);
                setProfile(data);
                setIsLoaded(true);
            } catch (err) {
                if (err.response?.status !== 401) {
                    setErrors(err.response?.data);
                }
                setIsLoaded(false);
            }
        };
        handleMount();
    }, [profile_id, isLoaded]);

    return isLoaded ? (
        <>
            <Row className="d-flex justify-content-center">
                <Col className="text-center my-4" lg={8}>
                    <h1>Profile</h1>
                </Col>
            </Row>
            <Row className="px-1 d-flex justify-content-center">
                <Col
                    className={`${styles.DetailBorder} ${styles.BorderTop} d-flex p-1`}
                    lg={8}>
                    <Row className="w-100">
                        <Col
                            xs={4}
                            md={6}
                            className="d-flex align-items-center justify-content-center">
                            <UserImage src={image} />
                        </Col>
                        <Col xs={8} md={6}>
                            <p className="p-1 m-0">Username: {owner}</p>
                            <p className="p-1 m-0">Name: {name}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="px-1 d-flex justify-content-center">
                <Col
                    className={`${styles.DetailBorder} ${styles.BorderMid} p-1`}
                    lg={8}>
                    <p className="p-1 m-0">Bio: {bio}</p>
                </Col>
            </Row>
            <Row className="px-1 d-flex justify-content-center">
                <Col
                    className={`${styles.DetailBorder} ${styles.BorderMid} p-1`}
                    lg={8}>
                    <p className="p-1 m-0">Email: {email}</p>
                </Col>
            </Row>
            <Row className="px-1 d-flex justify-content-center">
                <Col
                    className={`${styles.DetailBorder} ${styles.BorderMid} p-1`}
                    lg={8}>
                    <p className="p-1 m-0">Phone: {phone}</p>
                </Col>
            </Row>
            <Row className="px-1 d-flex justify-content-center">
                <Col
                    className={`${styles.DetailBorder} ${styles.BorderBottomLeft} p-1`}
                    xs={6}
                    lg={4}>
                    <p className="p-1 m-0">Joined: {created_at}</p>
                </Col>
                <Col
                    className={`${styles.DetailBorder} ${styles.BorderBottomRight} p-1`}
                    xs={6}
                    lg={4}>
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
    ) : (
        <Row className={appStyles.LoadingSpinner}>
            <Col className="text-center my-4" lg={8}>
                <Spinner animation="grow" variant="dark" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                {errors.detail && (
                    <Alert variant="warning" className="mt-3">
                        {errors.detail}
                    </Alert>
                )}
            </Col>
        </Row>
    );
};

export default ProfilePage;
