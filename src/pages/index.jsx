import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Head>
        <title>Directu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <header className={styles.hero}>
          <h1>O software ideal para os lojistas</h1>
          <p>Experiência no atendimento</p>
          <button onClick={() => setModal(true)}>Assine gratuitamente</button>
        </header>

        <section className={styles.example1}>
          <img src="/example1.png" alt="Directu" />
        </section>

        <section className={styles.section}>
          <h1>
            Directu é fácil e poderoso para potenciar o{" "}
            <span className={styles.color}>seu negócio</span>
          </h1>
          <p>
            Com esta ferramenta os lojistas entedererão melhor seus clientes,
            para fazer marketing direcionado e poderão utilizar isso para
            atender cada cliente do jeito que merecer
          </p>
        </section>

        <section className={styles.pricing}>
          <div className={styles.price}>
            <span className={styles.type}>Grátis</span>
            <div className={styles.value}>
              <h1>R$0</h1>
            </div>
            <div className="description">
              Para lojistas que estão começando seu negócio mas querem fazer
              diferente
            </div>
            <ul>
              <li>
                <FiCheck color="#0f0" />1 colaborador
              </li>
              <li>
                <FiCheck color="#0f0" />
                Formulários ilimitados
              </li>
              <li>
                <FiCheck color="#0f0" />
                Consulta ilimitada
              </li>
            </ul>
            <button onClick={() => setModal(true)}>Entrar gratuito</button>
          </div>
          <div className={styles.price}>
            <span className={styles.type}>Pro</span>
            <div className={styles.value}>
              <h1>R$50</h1>
              <span>/mês</span>
            </div>
            <div className="description">
              Para lojistas com o negócio já bem estabelecido
            </div>
            <ul>
              <li>
                <FiCheck color="#0f0" />
                Vários colaboradores
              </li>
              <li>
                <FiCheck color="#0f0" />
                Formulários ilimitados
              </li>
              <li>
                <FiCheck color="#0f0" />
                Relatório mensal
              </li>
              <li>
                <FiCheck color="#0f0" />
                Consulta ilimitada mais rápida
              </li>
            </ul>
            <button onClick={() => setModal(true)}>Entrar em contato</button>
          </div>
        </section>

        {modal && <Modal setModal={setModal} />}
      </Layout>
    </>
  );
}
