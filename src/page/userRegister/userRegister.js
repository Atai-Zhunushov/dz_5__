import React, {useState} from 'react';
import {Row, Col, Form, Button, Container, Spinner} from "react-bootstrap";
import {useDispatch , useSelector} from "react-redux";
import {addUserAction} from "../../redux/action/action";

const UserRegister = () => {
    const {preloader} = useSelector(state => state.preloaderReducer)

    const dispatch = useDispatch()


    const [user , setUser] = useState({
        name: '',
        username: '',
        email: ''
    })
    const formValue = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const addUser = (e) => {
        e.preventDefault()
        dispatch(addUserAction(user))
    }

    return (
        <Container>
            <h1>Register User</h1>
            {preloader ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
             :
                <Form onSubmit={addUser}>
                    <Row>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control
                                    type="text"
                                    placeholder="name"
                                    name="name"
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="username">

                                <Form.Control
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control
                                    type="text"
                                    placeholder="email"
                                    name="email"
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Button type="submit" variant="success" className="w-100">
                                register user
                            </Button>
                        </Col>
                    </Row>
                </Form>
            }


        </Container>

    );
};

export default UserRegister;