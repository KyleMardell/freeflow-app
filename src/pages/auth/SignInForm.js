import React, { useState } from "react";
import axios from "axios";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import buttonStyles from "../../styles/Button.module.css";

import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { setTokenTimestamp } from "../../utils/utils";
import { useRedirect } from "../../hooks/useRedirect";

function SignInForm() {
    const setCurrentUser = useSetCurrentUser();
    useRedirect("loggedIn");

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post(
                "/dj-rest-auth/login/",
                signInData
            );
            setCurrentUser(data.user);
            setTokenTimestamp(data);
            history.push("/projects");
        } catch (err) {
            setErrors(err.response?.data);
            console.log(err.response);
        }
    };

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto p-2 " md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign in</h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                className={styles.Input}
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                className={styles.Input}
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <div className="text-center">
                            <Button className={`${buttonStyles.Button} ${buttonStyles.Wide}`} type="submit">
                                Sign in
                            </Button>
                            {errors.non_field_errors?.map((message, idx) => (
                                <Alert
                                    key={idx}
                                    variant="warning"
                                    className="mt-3">
                                    {message}
                                </Alert>
                            ))}
                        </div>
                    </Form>
                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signup">
                        Don't have an account? Sign up now!
                    </Link>
                </Container>
            </Col>
        </Row>
    );
}

export default SignInForm;
