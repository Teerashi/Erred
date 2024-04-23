import React from 'react'

export default function UsersList({users}) {
    const usersItems = users.map((user) => <UserItem user={user} key={user.id}/>
    )
  return (
    <div>
      {usersItems}
    </div>
  )
}

const UserItem = ({user}) => {
        return (
    <article key={user.id}>
        <h2>{user.firstName} {user.lastName}</h2>
    </article>
        )
    }