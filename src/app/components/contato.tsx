// app/components/contato.tsx
import React from 'react';
import Link from 'next/link';

const Contato: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/components/page">Home</Link>
            </li>
            <li>
              <Link href="/components/pagamento">Pagamento</Link>
            </li>
            <li>
              <Link href="/components/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/components/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Página de Contato</h1>
        <p>Esta é a página de contato.</p>
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

export default Contato;
