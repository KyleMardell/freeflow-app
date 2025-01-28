import React, { useEffect, useState } from 'react';

import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { axiosReq  } from '../../api/axiosDefaults';

import buttonStyles from "../../styles/Button.module.css";

const CustomTasksPage = ({filter=""}) => {

    const [customTasks, setCustomTasks] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchCustomTasks = async () => {
            try {
                const {data} = await axiosReq.get('/custom_tasks');
                console.log(data);
                setCustomTasks(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };
        setHasLoaded(false);
        fetchCustomTasks();
    }, [filter]);

  return (
    <Row className="h-100 d-flex justify-content-center">
            <Col className="py-2 text-center" lg={8}>
                <h1 className="my-4">My Custom Tasks</h1>
                <Link to="/customtasks/create">
                    <Button className={`${buttonStyles.Button} ${buttonStyles.Wide} my-3`}>
                        Create New Custom Task
                    </Button>
                </Link>
                {hasLoaded ? (
                    <>
                    {customTasks.length ? (
                        customTasks.map((customTask) => {
                            return (
                                <div>Custom task</div>
                            )
                        })
                    ) : (
                        <div>No custom tasks yet...</div>
                    )}
                    </>
                ) : (
                    <>
                        <div>No custom tasks yet...</div>
                    </>
                )}
            </Col>
        </Row>
  )
}

export default CustomTasksPage