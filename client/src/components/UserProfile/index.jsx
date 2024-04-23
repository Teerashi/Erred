import React from 'react'
import CONSTANTS from '../../constants'
import styles from './UserProfile.module.scss';



export default function UserProfile({user}) {

const fullName = `${user.firstName} ${user.lastName}`

  return (
    <article className={styles.container}>
        <h2 className={styles.containerHeading}>{fullName}</h2>
        <div className={styles.imgWrapper}>
            <img src={user.imgSrc ? user.imgSrc : CONSTANTS.PLACEHOLDER_USER_PIC}  alt={fullName} className={styles.img}/>
        </div>
        <section className={styles.details}> 
            <h3 className={styles.detailsHeading}>User details</h3>
            <ul className={styles.detailsList}>
                <li className={styles.listItem}>
                    <p className={styles.detailText}><span className={styles.detailTextBold}>Email</span>: {user.email}</p>
                </li>
                <li className={styles.listItem}>
                    <p className={styles.detailText}><span className={styles.detailTextBold}>Gender</span>: ${user.isMale ? 'male' : 'female'}</p>
                </li>
            </ul>
        </section>
    </article>
  )
}
