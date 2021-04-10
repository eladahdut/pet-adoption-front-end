import React from "react";
import Modal from "react-modal";
import LogSigModal from "./logSigModal";
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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <div>
      <button
        style={{ padding: "0", marginTop: "0.7rem" }}
        onClick={toggleModal}
        type="button"
        class="btn btn-outline-dark btn-round"
        data-toggle="modal"
        data-target="#loginModal">
        Login
      </button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        toggleModal={toggleModal}>
        <LogSigModal />
      </Modal>
    </div>
  );
}

export default LogSigBtn;
