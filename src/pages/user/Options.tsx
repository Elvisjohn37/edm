import styles from './Options.module.scss'
import { Button } from '../../components/FormGroup'
import { useSelector, useDispatch } from 'react-redux'
import { TUser } from './todo'
import { saveEditUser, removedNewValue } from './slice'
import classNames from 'classnames'
import Modal from '../../components/Modal'
import { useState } from 'react'
import { setHasModal } from '../../index/slice'
import { editUser as editUserRequest } from '../../api/requests'

export default function Options({ editableUsers, removeEditable }: any) {
    const { users } = useSelector((state: any) => state.todo)
    const [isShow, setIsShow] = useState(false)

    const hasUnsavedChanges = users.filter((user: TUser) => user.newValue)

    const dispatch = useDispatch()

    const handleSaveChanges = () => {
        hasUnsavedChanges.map((hasUnsavedChange: any) => {
            hasUnsavedChange = {
                ...hasUnsavedChange,
                name: hasUnsavedChange.newValue,
            }
            delete hasUnsavedChange.newValue
            editUserRequest({
                data: hasUnsavedChange,
                success: () => {
                    dispatch(saveEditUser())
                    dispatch(removedNewValue())
                    removeEditable()
                },
                error: () => {},
                completed: () => {},
            })
        })
    }

    const handleAddUser = () => {
        setIsShow(true)
        dispatch(setHasModal(true))
    }

    return (
        <div className={styles.options}>
            <div className={styles.search}>
                <form>
                    <label>Search:</label>
                    <input />
                    <Button className={styles.buttonSearch} label="Search" />
                </form>
            </div>
            <div className={styles.buttonOptions}>
                <Button
                    className={styles.addButton}
                    onClick={handleAddUser}
                    label="Add User"
                />
                <Button
                    className={classNames([
                        styles.saveEditUsers,
                        editableUsers.length === 0 && styles.disabled,
                    ])}
                    disabled={editableUsers.length === 0}
                    onClick={handleSaveChanges}
                    label="Save Changes"
                />
            </div>
            <Modal isShow={isShow} close={() => setIsShow(false)} />
        </div>
    )
}
