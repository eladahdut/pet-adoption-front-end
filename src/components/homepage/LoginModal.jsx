import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import SignUpModal from "./SignUpModal";
import { UIStore } from "../stateStore/StateStore";
import axios from "axios";
Modal.setAppElement("#root");

function LogSigModal(props) {
  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:3000/users/login",
      data: {
        email: email,
        password: password,
      },
    });
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [isModalOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = UIStore.useState((s) => s.isLoggedIn);

  const toggleModal = (e) => {
    e.preventDefault();
    setIsOpen(!isModalOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    UIStore.update((s) => {
      s.isLoggedIn = !isLoggedIn;
    });
    setIsOpen(!!isModalOpen);
  };
  const handleLogin = (value) => {
    setEmail(value);
    setPassword(value);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => handleLogin(e.target.value)}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => handleLogin(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
        <div>
          Not registered yet?
          <button className="btn btn-link mb-2" onClick={toggleModal}>
            Sign up here
          </button>
        </div>
      </form>
      <Modal style={customStyles} isOpen={isModalOpen}>
        <SignUpModal toggleModal={toggleModal} closeFirstModal={props.isOpen} />
      </Modal>
    </div>
  );
}

export default LogSigModal;
