import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import ErrorMessage from "../../components/errorMessage";
import axios from "axios";
import Loading from "../../components/loading";
// import "./signUp.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/user");
    }
  }, [navigate]);

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
          { name, pic, email, password, phoneNumber, address },
          config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/login");
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
        })
        .catch((err) => {
          console.log(error);
        });
    } else {
      setMessage("Please select an image");
    }
  };

  return (
    <div className="login-body">
      <Header />
      {message && <ErrorMessage variant="danger"> {message} </ErrorMessage>}
      {error && <ErrorMessage variant="danger"> Error </ErrorMessage>}
      {loading && <Loading />}
      <div className="container h-100">
        <div className="row login-form-area">
          <div className="col-xl-6">
            <div className="login-form-input-content">
              <div className="login-card mb-0">
                <div className="login-card-body">
                  <h4 className="text-center">Sign Up</h4>
                  <form className="login-input" onSubmit={submitHandler}>
                    <div className="login-form-group">
                      <input
                        type="name"
                        className="login-form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="login-form-group">
                      <input
                        type="email"
                        className="login-form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="login-form-group">
                      <input
                        type="tel"
                        className="login-form-control"
                        placeholder="Contact No."
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="login-form-group">
                      <input
                        type="text"
                        className="login-form-control"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="login-form-group">
                      <input
                        type="password"
                        className="login-form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="login-form-group">
                      <input
                        type="password"
                        className="login-form-control"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="login-form-group">
                      <input
                        className="login-form-control"
                        type="file"
                        onChange={(e) => postDetails(e.target.files[0])}
                      />
                    </div>
                    <button
                      className="btn login-form-btn submit w-100"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </form>
                  <p className="login-form-footer">
                    Already have account?{" "}
                    <a href="/login" className="text-primary">
                      Login
                    </a>{" "}
                    now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
