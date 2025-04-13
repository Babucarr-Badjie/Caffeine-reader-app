import { useState } from "react";
import Authentication from "./Authentication";
import Modal from "./Modal";

export default function Layout(props) {
  const { children } = props;

  const [showModal, setShowModal] = useState(false);

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFEINE</h1>
        <p>For Coffee Insatiate</p>
      </div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        <p>Sign up free</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  );

  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffeine</span> design & written by{" "}
        <a
          href="https://babucarr-badjie-portfolio.netlify.app/"
          target="_blank"
        >
          Babucarr Badjie
        </a>{" "}
      </p>
    </footer>
  );
  return (
    <>
      {showModal && (
        <Modal
          handleCloseModal={() => {
            setShowModal(false);
          }}
        >
          <Authentication />
        </Modal>
      )}
      {header}
      <main>{children}</main>

      {footer}
    </>
  );
}
