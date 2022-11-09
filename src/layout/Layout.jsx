import { useState } from 'react';
import MenuIcon from '../assets/icons/Menu.svg';
import NotificationsIcon from '../assets/icons/Notifications.svg';
import PersonIcon from '../assets/icons/Person.svg';

import styles from './Layout.module.css';

const nav = document.getElementsByClassName('nav');

const Layout = props => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuClick = event => {
    if (isOpen) {
      setIsOpen(false);
    }
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  console.log(nav);

  return (
    <section className={styles.layout}>
      <header className={styles.header}>
        <button onClick={handleMenuClick}>
          <img
            src={MenuIcon}
            alt="Ícone de Menu representado por 3 linhas horizontais agrupadas verticalmente"
          />
        </button>
        <div>
          <button>
            <img
              src={NotificationsIcon}
              alt="Ícone de notificações representado por um sino desenhado em linhas cinzas"
            />
          </button>
          <button className={styles['person__icon']}>
            <img src={PersonIcon} alt="Ícone de Usuário" />
          </button>
        </div>
      </header>
      {isOpen ? (
        <nav className={`${styles.nav} slide-out`}>
          <ul>
            <li>
              <h3>Trilhas</h3>
            </li>
            <li>
              <h3>Ranking</h3>
            </li>
            <li>
              <h3>Perfil</h3>
            </li>
            <li>
              <h3>Minha Conta</h3>
            </li>
            <li>
              <h3>Atendimento</h3>
            </li>
          </ul>
          <button>
            <h3>Sair</h3>
          </button>
        </nav>
      ) : (
        <nav className={`${styles.nav} slide-in`}>
          <ul>
            <li>
              <h3>Trilhas</h3>
            </li>
            <li>
              <h3>Ranking</h3>
            </li>
            <li>
              <h3>Perfil</h3>
            </li>
            <li>
              <h3>Minha Conta</h3>
            </li>
            <li>
              <h3>Atendimento</h3>
            </li>
          </ul>
          <button>
            <h3>Sair</h3>
          </button>
        </nav>
      )}

      <section>{props.children}</section>
    </section>
  );
};

export default Layout;
