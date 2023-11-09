import styles from './Options.module.scss'
import { Button } from '../../components/FormGroup'
import { useSelector, useDispatch } from 'react-redux'
import { TUser } from './todo'
import { saveEditUser, removedNewValue, addUser } from './slice'
import classNames from 'classnames'

export default function Options({ editableUsers, removeEditable }: any) {
    const { users } = useSelector((state: any) => state.todo)

    const hasUnsavedChanges = users.find((user: TUser) => user.newValue)

    const dispatch = useDispatch()

    const handleSaveChanges = () => {
        dispatch(saveEditUser())
        dispatch(removedNewValue())
        removeEditable()
    }

    const handleAddUser = () => {
        dispatch(addUser())
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
                    className={classNames([styles.saveEditUsers,
                        editableUsers.length === 0 && styles.disabled,
                    ])}
                    disabled={editableUsers.length === 0}
                    onClick={handleSaveChanges}
                    label="Save Changes"
                />
            </div>
        </div>
    )
}
