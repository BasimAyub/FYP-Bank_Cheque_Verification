import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import MainPage from "../mainPage";
import axios from "axios";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/errorMessage";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data))
      setError(false)
      setLoading(false);
    } catch (error) {
        setError(true)
        setLoading(false)
    }
  };

  return (
    <MainPage title="LOGIN">
        {error && <ErrorMessage variant="danger" > Error </ErrorMessage>}
        {loading && <Loading/>}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text className="text-muted">
            Dont have an account? <a href="/register">Create Account</a>
          </Form.Text>
        </Form.Group>
      </Form>
    </MainPage>
  );
};

export default LoginScreen;
