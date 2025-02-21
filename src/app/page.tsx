"use client";

import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pagamento">Pagamento</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/conponets/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Bem-vindo à página inicial top!</h1>
      </main>
      <style jsx>{`
        header {
          background: #333;
          color: #fff;
          padding: 1rem;
        }
        nav ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
        }
        nav ul li {
          margin: 0 1rem;
        }
        nav ul li a {
          color: #fff;
          text-decoration: none;
        }
        main {
          padding: 2rem;
        }
      `}</style>
    </>
  );
};

export default Home;
