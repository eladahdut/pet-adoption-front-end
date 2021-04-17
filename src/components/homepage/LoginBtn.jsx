import React from "react";
import Modal from "react-modal";
import LoginModal from "./LoginModal";
Modal.setAppElement("#root");

function LogSigBtn() {
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

  function toggleModal(e) {
    e.preventDefault();
    setIsOpen(!isModalOpen);
  }

  return (
    <div>
      <button
        style={{ padding: "0", marginTop: "0.7rem" }}
        onClick={toggleModal}
        type="button"
        className="btn btn-outline-dark btn-round"
        data-toggle="modal"
        data-target="#loginModal">
        Login
      </button>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        toggleModal={toggleModal}>
        <LoginModal isOpen={setIsOpen} />
        <button onClick={toggleModal} className="btn btn-outline-success">
          Close
        </button>
      </Modal>
    </div>
  );
}

export default LogSigBtn;
