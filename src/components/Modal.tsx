import { useRef, useState } from 'react'
import styles from './Modal.module.scss'
import { Button, Input } from './FormGroup'
import { TModal } from './modal/modal'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { addUser } from '../pages/user/slice'
import { passwordValidation } from '../utils/helpers'
import { TValidation } from './modal/modal'
import { insertUser } from '../api/requests'

export default function Modal({ isShow, close }: TModal) {
    const name = useRef('')
    const username = useRef('')
    const password = useRef('')
    const dispatch = useDispatch()
    const [validation, setValidation] = useState<TValidation>({})

    const handleClose = () => {
        close()
    }

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        const data = {
            name: name.current,
            password: password.current,
            username: username.current,
            date: new Date().toDateString(),
            roleId: 1,
            role: {
                role: 'Editor',
                id: 1
            }
        }

        insertUser({
            data,
            success: (response: any) => {
                dispatch(addUser(data))
                handleClose()
            },
            error: () => {},
            completed: () => {},
        })
        
    }

    const handleOnchange = (
        event: { target: { value: string } },
        data: string
    ) => {
        handleValidation()
        data === 'name' && (name.current = event.target.value)
        data === 'username' && (username.current = event.target.value)
        if (data === 'password') {
            password.current = event.target.value
            handleValidation()
        }
    }

    const handleValidation = () => {
        setValidation({
            ...validation,
            password: passwordValidation(password.current),
        })
    }

    document.body.className = isShow ? 'hasModal' : ''

    return isShow ? (
        <div className={styles.modal}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1>Add New User</h1>
                    <FontAwesomeIcon
                        className={styles.close}
                        onClick={handleClose}
                        icon={faXmark}
                    />
                </div>

                <div className={styles.body}>
                    <form onSubmit={handleSubmit}>
                        <Input
                            onChange={(event) => handleOnchange(event, 'name')}
                            className={styles.input}
                            label="Name:"
                        />
                        <Input
                            onChange={(event) =>
                                handleOnchange(event, 'username')
                            }
                            className={styles.input}
                            label="Username:"
                        />
                        <Input
                            onChange={(event) =>
                                handleOnchange(event, 'password')
                            }
                            className={styles.input}
                            type="password"
                            label="Password:"
                            validation={validation.password}
                        />
                        <Button
                            type="submit"
                            className={styles.buttonSubmit}
                            label="Submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    ) : null
}
