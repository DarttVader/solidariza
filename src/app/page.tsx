// app/components/page.tsx
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
              <Link href="/components/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Bem-vindo à Página Inicial!</h1>
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
