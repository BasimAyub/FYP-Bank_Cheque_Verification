import React, { useState } from "react";
import MainPage from "../mainPage";
import { Form, Button } from "react-bootstrap";
import ErrorMessage from "../../components/errorMessage";
import axios from "axios";
import Loading from "../../components/loading";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage();
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "/api/users",
          { name, pic, email, password },
          config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error);
      }
    }
    console.log(email);
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "userAuth");
      data.append("cloud_name", "dxrrifozh");
      fetch("https://api.cloudinary.com/v1_1/dxrrifozh/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        }).catch((err)=>{
          console.log(error)
        });
    }
    else{
      setMessage("Please select an image")
    }
  };
  return (
    <MainPage title="REGISTER">
      {message && <ErrorMessage variant="danger"> {message} </ErrorMessage>}
      {error && <ErrorMessage variant="danger"> Error </ErrorMessage>}
      {loading && <Loading />}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        {picMessage && (
          <ErrorMessage variant="danger" >{picMessage}</ErrorMessage>
        )}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control 
          onChange={(e)=> postDetails(e.target.files[0])}
          type="file" 
          />
          
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text className="text-muted">
            Already have an account? <a href="/login">Login</a>
          </Form.Text>
        </Form.Group>
      </Form>
    </MainPage>
  );
};

export default RegisterScreen;
