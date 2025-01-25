import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults';

import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectPage from "./pages/projects/ProjectPage";
import ProjectCreateForm from "./pages/projects/ProjectCreateForm";

function App() {

    return (
                <div className={styles.App}>
                    <NavBar />
                    <Container className={styles.Main}>
                        <Switch>
                            <Route exact path="/" render={() => <h1>Home page</h1>} />
                            <Route
                                exact
                                path="/signin"
                                render={() => <SignInForm />}
                            />
                            <Route
                                exact
                                path="/signup"
                                render={() => <SignUpForm />}
                            />
                            <Route
                                exact
                                path="/projects"
                                render={() => <ProjectsPage />}
                            />
                            <Route
                                exact
                                path="/projects/:id"
                                render={() => <ProjectPage />}
                            />
                            <Route
                                exact
                                path="/projectscreate"
                                render={() => <ProjectCreateForm />}
                            />
                            <Route
                                exact
                                path="/profile"
                                render={() => <h1>Profile</h1>}
                            />
                            <Route
                                exact
                                path="/customtasks"
                                render={() => <h1>Custom Tasks</h1>}
                            />
                            <Route
                                exact
                                path="/projectarchive"
                                render={() => <h1>Project Archive</h1>}
                            />
                            <Route render={() => <p>Page not found!</p>} />
                        </Switch>
                    </Container>
                </div>
    );
}

export default App;
