import React, { useEffect, useRef, useState } from "react";

import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import UserImage from "../../components/UserImage";

import buttonStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { axiosReq } from "../../api/axiosDefaults";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";

const ProfileEditForm = ({ profile_id }) => {
    useRedirect("loggedOut");
    const [profile, setProfile] = useState({
        name: "",
        bio: "",
        email: "",
        phone: "",
        image: "",
    });
    const { name, bio, image, email, phone } = profile;

    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const setCurrentUser = useSetCurrentUser();

    const history = useHistory();
    const imageFile = useRef();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/profiles/${profile_id}`);
                setProfile(data);
                setIsLoaded(true);
            } catch (err) {
                setIsLoaded(false);
                if (err.response?.status !== 401) {
                    setErrors(err.response?.data);
                }
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    customError:
                        "An error occurred. Please try again or navigate to another page.",
                }));
            }
        };
        handleMount();
    }, [profile_id]);

    const handleChange = (event) => {
        setProfile({
            ...profile,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("bio", bio);
        formData.append("phone", phone);
        formData.append("email", email);
        if (imageFile?.current?.files[0]) {
            formData.append("image", imageFile?.current.files[0]);
        }

        try {
            const { data } = await axiosReq.put(
                `/profiles/${profile_id}/`,
                formData
            );
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_image: data.image,
            }));
            history.goBack();
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return isLoaded ? (
        <Row className="h-100 d-flex justify-content-center">
            <Col className="my-auto p-2 text-center" lg={8}>
                <h1 className="my-4">Edit Profile</h1>
            </Col>

            {errors.detail && (
                <Alert variant="warning" className="mt-3">
                    {errors.detail}
                </Alert>
            )}

            <Col className="my-auto p-2" lg={8}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            This may also be a company name.
                        </Form.Text>
                    </Form.Group>
                    {errors?.name?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}

                    <Form.Group>
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Bio..."
                            name="bio"
                            value={bio}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors?.bio?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}

                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@email.com"
                            name="email"
                            value={email || ""}
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            Email is required
                        </Form.Text>
                    </Form.Group>
                    {errors?.email?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}

                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="0123456789"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {errors?.phone?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}

                    <Form.Group>
                        <UserImage src={image} />
                        <Form.Label>Change image</Form.Label>
                        <Form.File
                            id="image-upload"
                            ref={imageFile}
                            accept="image/"
                            onChange={(e) => {
                                if (e.target.files.length) {
                                    setProfile({
                                        ...profile,
                                        image: URL.createObjectURL(
                                            e.target.files[0]
                                        ),
                                    });
                                }
                            }}
                        />
                    </Form.Group>
                    {errors?.image?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}

                    <Button
                        className={`${buttonStyles.Button} ${buttonStyles.Wide}`}
                        type="submit">
                        Submit
                    </Button>
                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert variant="warning" key={idx} className="mt-3">
                            {message}
                        </Alert>
                    ))}
                </Form>
            </Col>
            <Col className="my-auto p-2" lg={8}>
                <Button
                    className={`${buttonStyles.ButtonYellow} ${buttonStyles.Wide}`}
                    onClick={() => history.push("/profile")}>
                    Return to Profile
                </Button>
            </Col>
        </Row>
    ) : (
        <Row className={appStyles.LoadingSpinner}>
            <Col className="text-center my-4" lg={8}>
                <Spinner animation="grow" variant="dark" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                {errors?.detail ? (
                    <Alert variant="warning" className="mt-3">
                        {errors.detail}
                    </Alert>
                ) : null}
                {errors?.customError ? (
                    <Alert variant="warning" className="mt-3">
                        {errors.customError}
                    </Alert>
                ) : null}
            </Col>
        </Row>
    );
};

export default ProfileEditForm;
