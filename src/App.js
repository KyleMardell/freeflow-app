import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch, Redirect } from "react-router-dom";
import './api/axiosDefaults';

import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectPage from "./pages/projects/ProjectPage";
import ProjectCreateForm from "./pages/projects/ProjectCreateForm";
import ProjectEditForm from "./pages/projects/ProjectEditForm";
import TaskCreateForm from "./pages/tasks/TaskCreateForm";
import TaskPage from "./pages/tasks/TaskPage";
import TaskEditForm from "./pages/tasks/TaskEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import CustomTasksPage from "./pages/customtasks/CustomTasksPage";
import CustomTaskCreateForm from "./pages/customtasks/CustomTaskCreateForm";
import CustomTaskPage from "./pages/customtasks/CustomTaskPage";
import CustomTaskEditForm from "./pages/customtasks/CustomTaskEditForm";
import ProjectsArchivePage from "./pages/projects/ProjectsArchivePage";
import ProjectReport from "./pages/projects/ProjectReport";

function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id;

    return (
                <div className={styles.App}>
                    <NavBar />
                    <Container className={styles.Main}>
                        <Switch>
                            <Route exact path="/" render={() => {
                                return currentUser ? <Redirect to="/projects" /> : <h1>Home page</h1>
                                }} />
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
                                path="/projects/create"
                                render={() => <ProjectCreateForm />}
                            />
                            <Route
                                exact
                                path="/projects/:id"
                                render={() => <ProjectPage />}
                            />
                            <Route
                                exact
                                path="/projects/:id/edit"
                                render={() => <ProjectEditForm />}
                            />
                            <Route
                                exact
                                path="/projects/:id/tasks/create"
                                render={() => <TaskCreateForm />}
                            />
                            <Route
                                exact
                                path="/projects/:pid/tasks/:tid"
                                render={() => <TaskPage />}
                            />
                            <Route
                                exact
                                path="/projects/:pid/tasks/:tid/edit"
                                render={() => <TaskEditForm />}
                            />
                            <Route
                                exact
                                path="/projects/:id/report"
                                render={() => <ProjectReport profile_id={profile_id} />}
                            />
                            <Route
                                exact
                                path="/profile"
                                render={() => <ProfilePage profile_id={profile_id} />}
                            />
                            <Route
                                exact
                                path="/profile/edit"
                                render={() => <ProfileEditForm profile_id={profile_id} />}
                            />
                            <Route
                                exact
                                path="/customtasks"
                                render={() => <CustomTasksPage />}
                            />
                            <Route
                                exact
                                path="/customtasks/create"
                                render={() => <CustomTaskCreateForm />}
                            />
                            <Route
                                exact
                                path="/customtasks/:id"
                                render={() => <CustomTaskPage />}
                            />
                            <Route
                                exact
                                path="/customtasks/:id/edit"
                                render={() => <CustomTaskEditForm />}
                            />
                            <Route
                                exact
                                path="/projectarchive"
                                render={() => <ProjectsArchivePage />}
                            />
                            <Route render={() => <p>Page not found!</p>} />
                        </Switch>
                    </Container>
                </div>
    );
}

export default App;
