import React, { useState } from "react";
import Modal from "react-modal";
import SignUpModal from "./SignUpModal";
import { login } from "../../lib/api";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { UIStore } from "../stateStore/StateStore";
Modal.setAppElement("#root");

function LogSigModal(props) {
  const history = useHistory();
  const auth = useAuth();

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
  // const isLoggedIn = UIStore.useState((s) => s.isLoggedIn);

  const toggleModal = (e) => {
    e.preventDefault();
    setIsOpen(!isModalOpen);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const data = await login(email, password);
        await auth.saveToken(data.userToken);
        await auth.saveUserId(data.userId);
        auth.saveAdoptedPet(data.adoptedPets);
        auth.saveFosteredPet(data.fosterdPets);
        auth.saveLikedPet(data.likedPets);
        history.push("/");
        setIsOpen(!!isModalOpen);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
