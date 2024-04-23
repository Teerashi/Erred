import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss'

export default function Header(props) {
  return (
    <header className={styles.container}>
        <ul className={styles.navList}>
          <li>
            <NavLink to='/' className={styles.link} activeClassName={styles.activeLink} >Home</NavLink>
          </li>
          <li>
          <NavLink to='/about' className={styles.link} activeClassName={styles.activeLink} >About</NavLink>
          </li>
          <li>
          <NavLink to='/profile' className={styles.link} activeClassName={styles.activeLink} >Profile</NavLink>
          </li>
          <li>
          <NavLink to='/registration' className={styles.link} activeClassName={styles.activeLink} >Registration</NavLink>
          </li>
          <li>
          <NavLink to='/users' className={styles.link} activeClassName={styles.activeLink} >Active users</NavLink>
          </li>
        </ul>
      </header>
  )
}
  