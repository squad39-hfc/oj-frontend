import { useState } from 'react';

import NavItem from '../components/NavItem/NavItem';

import MenuIcon from '../assets/icons/Menu.svg';
import NotificationsIcon from '../assets/icons/Notifications.svg';
import { ReactComponent as SignOutIcon } from '../assets/icons/SignOut.svg';
import PersonIcon from '../assets/icons/Person.svg';
import { ReactComponent as TrailIcon } from '../assets/icons/Trilha.svg';
import { ReactComponent as RankingIcon } from '../assets/icons/Ranking.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/Profile.svg';
import { ReactComponent as MyAccountIcon } from '../assets/icons/MyAccount.svg';
import { ReactComponent as AttendanceIcon } from '../assets/icons/Attendance.svg';

import styles from './Layout.module.css';
import { Link } from 'react-router-dom';

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

  return (
    <section className={styles.layout}>
      <header className={styles.header}>
        <button>
          <img
            onClick={handleMenuClick}
            src={MenuIcon}
            alt="Ícone de Menu representado por 3 linhas horizontais agrupadas verticalmente"
          />
        </button>
        <div>
          <button>
            <img
              src={NotificationsIcon}
              alt="Ícone de notificações representado por um sino desenhado em linhas cinzas"
              title="Desculpe! Função ainda não disponível"
            />
          </button>
          <button className={styles['person__icon']}>
            <img
              src={PersonIcon}
              alt="Ícone de Usuário"
              title="Desculpe! Ainda não está disponível"
            />
          </button>
        </div>
      </header>
      {!isOpen ? (
        <nav className={`${styles.nav} slide-out`}>
          <ul>
            <NavItem label="Trilhas">
              <TrailIcon />
            </NavItem>
            <NavItem label="Ranking">
              <RankingIcon />
            </NavItem>
            <NavItem label="Perfil">
              <ProfileIcon />
            </NavItem>
            <NavItem label="Conta">
              <MyAccountIcon />
            </NavItem>
            <NavItem label="Suporte">
              <AttendanceIcon />
            </NavItem>
          </ul>
          <button>
            <SignOutIcon />
            <h3>Sair</h3>
          </button>
        </nav>
      ) : (
        <nav className={`${styles.nav} slide-in`}>
          <ul>
            <Link to="/">
              <NavItem label="Trilhas">
                <TrailIcon />
              </NavItem>
            </Link>
            <NavItem label="Ranking">
              <RankingIcon />
            </NavItem>
            <NavItem label="Perfil">
              <ProfileIcon />
            </NavItem>
            <NavItem label="Conta">
              <MyAccountIcon />
            </NavItem>
            <NavItem label="Suporte">
              <AttendanceIcon />
            </NavItem>
          </ul>
          <button>
            <div>
              <SignOutIcon />
            </div>
            <div>
              <h3>Sair</h3>
            </div>
          </button>
        </nav>
      )}

      <section>{props.children}</section>
    </section>
  );
};

export default Layout;
