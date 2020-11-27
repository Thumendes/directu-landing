import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Axios from "axios";
import { useState } from "react";
import styles from "./styles.module.scss";

const Modal = ({ setOpen, isOpen }) => {
  const [form, setForm] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Axios.post("https://directu-backend.herokuapp.com/auth/signup", form);
  };
  return (
    <motion.div
      className={styles.container}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.1 }}
      variants={{
        closed: { visibility: "hidden", opacity: 0 },
        open: { visibility: "visible", opacity: 1 },
      }}
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.1 }}
        variants={{
          open: { opacity: 1, scale: 1 },
          closed: { opacity: 0, scale: 1 },
        }}
      >
        <button onClick={() => setOpen(false)} className={styles.close}>
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
      </motion.div>
    </motion.div>
  );
};

export default Modal;
