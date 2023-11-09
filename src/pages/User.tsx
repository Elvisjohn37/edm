import { useState, useRef } from 'react'
import styles from './User.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { TUser } from './user/todo'
import { useEffect } from 'react'
import { getUsers } from '../api/requests.js'
import { setUsers, deleteTodo, editUser } from './user/slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteTodo as deleteTodoRequest } from '../api/requests.js'
import Options from './user/Options'

export default function Todo() {
    const dispatch = useDispatch()
    const { users } = useSelector((state: any) => state.todo)
    const [editableUsers, setEditableUsers] = useState<number[]>([])
    const newValues = useRef<TUser[]>([])

    useEffect(() => {
        getUsers({
            success: (response: any) => {
                dispatch(setUsers(response.data))
            },
            error: (response: any) => {},
            completed: () => {
                console.log()
            },
        })
    }, [])

    const handleEdit = (todo: TUser) => {
        setEditableUsers(
            editableUsers.includes(todo.id)
                ? editableUsers.filter(
                      (editableTodo) => editableTodo !== todo.id
                  )
                : [...editableUsers, todo.id]
        )
        newValues.current.push(todo)
    }

    const handleDelete = (id: number) => {
        deleteTodoRequest({
            data: { id },
            success: (response: any) => {
                dispatch(deleteTodo({ id }))
            },
            error: (response: any) => {},
            completed: (response: any) => {},
        })
    }

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        id: number
    ) => {
        dispatch(editUser({ id, newValue: event.target.value }))
    }

    return (
        <div className={styles.todo}>
            <Options
                editableUsers={editableUsers}
                removeEditable={() => {
                    setEditableUsers([])
                }}
            />
            <table>
                <thead>
                    <tr>
                        <th>Role</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: TUser) => (
                        <tr key={user.id}>
                            <td>{user.role.role}</td>
                            <td className={styles.editable}>
                                {editableUsers.includes(user.id) ? (
                                    <input
                                        onChange={(event) =>
                                            handleChange(event, user.id)
                                        }
                                        value={
                                            user.newValue
                                                ? user.newValue
                                                : user.name
                                        }
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>{user.date}</td>
                            <td>
                                <FontAwesomeIcon
                                    className={styles.actionButton}
                                    onClick={(event) => handleEdit(user)}
                                    icon={faPenToSquare}
                                />
                                <FontAwesomeIcon
                                    className={styles.actionButton}
                                    onClick={() => handleDelete(user.id)}
                                    icon={faTrash}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
