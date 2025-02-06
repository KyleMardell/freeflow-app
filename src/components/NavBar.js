import React, { useEffect, useState } from "react";

import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "../styles/NavBar.module.css";
import buttonStyles from "../styles/Button.module.css";

import {
    useCurrentUser,
    useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const history = useHistory();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    useEffect(() => {
        setShow(false);
    }, [currentUser]);

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
            history.push("/");
        } catch (err) {
            console.log(err);
        }
    };

    const loggedOutNav = (
        <>
            <NavLink
                className={`${styles.NavLink} text-center`}
                activeClassName={styles.Active}
                to="/signin">
                Sign in
            </NavLink>
            <NavLink
                to="/signup"
                className={`${styles.NavLink} text-center`}
                activeClassName={styles.Active}>
                Sign up
            </NavLink>
        </>
    );

    const loggedInNav = (
        <>
            <NavLink
                className={`${styles.NavLink} text-center`}
                activeClassName={styles.Active}
                to={`/profile`}>
                Profile
            </NavLink>
            <NavLink
                className={`${styles.NavLink} text-center`}
                activeClassName={styles.Active}
                to="/customtasks">
                Custom Tasks
            </NavLink>
            <NavLink
                to="/projectarchive"
                className={`${styles.NavLink} text-center`}
                activeClassName={styles.Active}>
                Project Archive
            </NavLink>
            <Nav.Link
                className={`${styles.NavLink} text-center`}
                onClick={handleShow}>
                Sign out
            </Nav.Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to sign out?</Modal.Body>
                <Modal.Footer>
                    <Button
                        className={buttonStyles.ButtonYellow}
                        onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        className={buttonStyles.Button}
                        onClick={handleSignOut}>
                        Sign Out
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

    return (
        <Navbar
            expanded={expanded}
            className={styles.NavBar}
            expand="lg"
            fixed="top">
            <Container>
                <NavLink to={currentUser ? "/projects" : "/"}>
                    <Navbar.Brand>
                        <span className={styles.NavBrand}>Free Flow</span>
                    </Navbar.Brand>
                </NavLink>

                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact
                            className={`${styles.NavLink} text-center`}
                            activeClassName={styles.Active}
                            to={currentUser ? "/projects" : "/"}>
                            Home
                        </NavLink>
                        {currentUser ? loggedInNav : loggedOutNav}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
