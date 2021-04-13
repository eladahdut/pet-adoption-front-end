import React from "react";
import Modal from "react-modal";
import SignInModal from "./SignInModal";
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
    setIsOpen(!isModalOpen);
  }

  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="d-flex justify-content-between">
        <button type="submit" class="btn btn-success">
          Submit
        </button>
        <button
          onClick={(e) => toggleModal(e)}
          className="btn btn-outline-warning">
          Close
        </button>
      </div>
      <div>Forgot your password? click here</div>
      <div>
        Not registered? click
        <button onClick={(e) => toggleModal(e)}>here</button>
      </div>
      <Modal style={customStyles} toggleModal={toggleModal}>
        <SignInModal />
      </Modal>
    </form>
  );
}

export default LogSigModal;
// isOpen={isModalOpen}
//
