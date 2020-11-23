const { FiX } = require("react-icons/fi");
import Axios from "axios";
import { useState } from "react";
import styles from "./styles.module.scss";

const Modal = ({ setModal }) => {
  const [form, setForm] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Axios.post("http://localhost:3001/auth/signup", form);
  };

  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => setModal(false)} className={styles.close}>
          <FiX />
        </button>
        <h1>Entrar em contato</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={({ target }) => setForm({ ...form, name: target.value })}
          />
          <input
            type="text"
            placeholder="E-mail empresarial"
            onChange={({ target }) => setForm({ ...form, email: target.value })}
          />
          <textarea
            placeholder="Descreva seu negócio"
            onChange={({ target }) =>
              setForm({ ...form, description: target.value })
            }
          ></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
