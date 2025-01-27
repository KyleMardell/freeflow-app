import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { Col, Row } from "react-bootstrap";
import UserImage from "../../components/UserImage";

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
          <Row>
              <Col>
                <h1>Profile</h1>
              </Col>
            </Row>
            <Row>
                <Col>
                <UserImage src={image} />
                    <div>
                        <p>Username: {owner}</p>
                        <p>Name: {name}</p>
                    </div>
                    
                </Col>
            </Row>
            <Row>
              <Col>
                <p>Bio: {bio}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Email: {email}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Phone: {phone}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Joined: {created_at}</p>
              </Col>
              <Col>
                <p>Last updated: {updated_at}</p>
              </Col>
            </Row>
        </>
    );
};

export default ProfilePage;
