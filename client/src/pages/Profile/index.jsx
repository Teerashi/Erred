import React from 'react'
import Header from '../../components/Header'
import UserProfile from '../../components/UserProfile'
import styles from './ProfilePage.module.scss'
import {useContext} from 'react';
import UserContext from '../../contexts/userContext';


export default function ProfilePage(props) {
  const [user] = useContext(UserContext);

  return (
    <>
        <Header/>
        <section className={styles.container}>
            <h1 className={styles.heading}>User Profile</h1>
            <UserProfile user={user}/>
        </section>
    </>
  )
}
