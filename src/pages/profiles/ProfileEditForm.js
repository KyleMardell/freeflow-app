import React, { useEffect, useState } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";
import UserImage from "../../components/UserImage";

import buttonStyles from "../../styles/Button.module.css";

import { axiosReq } from "../../api/axiosDefaults";

const ProfileEditForm = ({ profile_id }) => {
    const [profile, setProfile] = useState({});
    const { name, bio, image, email, phone } = profile;

    useEffect(() => {
      const handleMount = async () => {
        try {
          const { data } = await axiosReq.get(`/profiles/${profile_id}/`);
          setProfile(data);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      };
      handleMount();
    },[profile_id]);

    const handleChange = (event) => {
      setProfile({
        ...profile,
        [event.target.name]: event.target.value,
      });
    };

    return (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="my-auto p-2 text-center" lg={8}>
                <h1 className="my-4">Edit Profile</h1>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                        <Form.Text className="text-muted">
                            This may also be a company name.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea" placeholder="Bio..." />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@email.com"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="0123456789" />
                    </Form.Group>

                    <Form.Group>
                      <UserImage src={image} />
                      <Form.Label>Change image</Form.Label>
                      <Form.File />
                    </Form.Group>

                    <Button
                        className={`${buttonStyles.Button} ${buttonStyles.Wide}`}
                        type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default ProfileEditForm;
