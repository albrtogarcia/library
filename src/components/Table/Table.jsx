import { useEffect, useState } from 'react'
import { Icon } from '../Icon/Icon'
import './Table.scss'

export const Table = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="table-container">
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      <table className="data-table">
        <thead>
          <tr>
            <th>
              <Icon name="corner_down_right" />
            </th>
            <th>Name</th>
            <th>Username</th>
            <th>Website</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>City</th>
            <th>
              <Icon name="files" />
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Icon name="chevron_right" />
              </td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.website}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
              <td>{user.address.city}</td>
              <td>
                <Icon name="download" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
