import React from "react";
import Modal from "react-modal";
import SignUpModal from "./SignUpModal";
Modal.setAppElement("#root");

function LogSigModal() {
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
  const [isModalOpen, setIsOpen] = React.useState(false);

  function toggleModal() {
    // e.preventDefault();
    setIsOpen(!isModalOpen);
  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
        <div>
          Forgot your password?
          <button className="btn btn-link" onClick={toggleModal}>
            click here
          </button>
        </div>
        <div>
          Not registered?
          <button className="btn btn-link" onClick={toggleModal}>
            click here
          </button>
        </div>
      </form>
      <button onClick={toggleModal} className="btn btn-outline-warning">
        Close
      </button>
      <Modal style={customStyles} isOpen={isModalOpen}>
        <SignUpModal toggleModal={toggleModal} />
      </Modal>
    </div>
  );
}

export default LogSigModal;
