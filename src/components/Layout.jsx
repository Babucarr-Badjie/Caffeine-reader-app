import { useState } from "react";
import Authentication from "./Authentication";
import Modal from "./Modal";
import { useAuth } from "../context/useAuth";

export default function Layout(props) {
  const { children } = props;

  const [showModal, setShowModal] = useState(false);
  const { globalUser, logout } = useAuth();

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFEINE</h1>
        <p>For Coffee Insatiate</p>
      </div>
      {globalUser ? (
        <button onClick={logout}>
          <p>Logout</p>
        </button>
      ) : (
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <p>Sign up free</p>
          <i className="fa-solid fa-mug-hot"></i>
        </button>
      )}
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
          <Authentication
            handleCloseModal={() => {
              setShowModal(false);
            }}
          />
        </Modal>
      )}
      {header}
      <main>{children}</main>

      {footer}
    </>
  );
}
