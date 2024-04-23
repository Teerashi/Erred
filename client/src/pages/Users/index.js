import React from 'react'
import Header from '../../components/Header'
import UsersList from '../../components/UsersList'
const activeUsers = [
    {
        id: 1,
        firstName: 'User',
        lastName: 'Userenko',
        email: 'user@user.com',
        password: '1234user',
        isMale: true
    },
    {
        id: 2,
        firstName: 'User2',
        lastName: 'Userenko2',
        email: 'user2@user.com',
        password: '1234user',
        isMale: true
    },
    {
        id: 3,
        firstName: 'User3',
        lastName: 'Userenko3',
        email: 'user3@user.com',
        password: '1234user',
        isMale: true
    }
]

export default function UsersPage(props) {
  return (
    <>
        <Header/>
        <section >
            <h1 >User Profile</h1>
            <UsersList users={activeUsers}/>
        </section>
    </>
  )
}
