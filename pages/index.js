import Head from 'next/head'
import styles from '../styles/Home.module.css'
import api from './api/api.js' // Pacote Axios com URL e Token de autenticação 
import React, {useEffect, useState} from 'react'


export default function Home() {

  const [status, setStatus] = useState();

  // Enviando solicitação GET para a URL definida em 'api.js'
  useEffect(() => {
      api
      .get()
      .then((response) => {
        setStatus(response.data.alive) // retornando só o valor de 'alive' por ser o único
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, []);

    let statusApi = '';           // Variável utilizada para o texto

    if(status) {                  // Se alive:true
      statusApi = "API online";
    } else {                      // Se alive:false
      statusApi = "API offline";
    }

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Doação de Computadores Usados</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Doação de computadores usados
        </h1>

        <p className={styles.description}>
          {statusApi}                      // <------- Texto da API
        </p>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/FelipeBMost"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <h2 id="easterEgg" className={styles.logo}>
            Pura força de vontade
          </h2>
        </a>
      </footer>
    </div>
  )
}
