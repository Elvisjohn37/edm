import React, { useEffect, useRef, useState } from 'react'
import styles from './Login.module.scss'
import { Input, Button } from '../components/FormGroup'
import { login } from '../api/requests'
import { TData, TResponse, TValidation } from './login/login'
import { passwordValidation } from '../utils/helpers'
import Alert from '../components/Alert'
import { setlogin } from './login/slice'
import { useDispatch } from 'react-redux'

export default function Login() {
    const [isLoginSuccess, setIsLoginSuccess] = useState<boolean | undefined>()
    const [validation, setValidation] = useState<TValidation>({})
    const dispatch = useDispatch()

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleValidation()
        username.current &&
            password.current &&
            login({
                data: {
                    username: username.current,
                    password: password.current,
                },
                success: (response: TResponse) => {
                    const loginUser = response.data.find(
                        (res: TData) =>
                            res.username === username.current &&
                            res.password === password.current
                    )
                    if (loginUser) {
                        dispatch(
                            setlogin({ isLogin: true, userInfo: loginUser })
                        )
                    } else {
                        setIsLoginSuccess(false)
                    }
                },
                error: (errorResponse: TData) => {},
                completed: () => {},
            })
    }

    const username = useRef('')
    const password = useRef('')

    const handleUsername = (event: { target: { value: '' } }) => {
        username.current = event.target.value
    }

    const handlePassword = (event: { target: { value: '' } }) => {
        password.current = event.target.value
        handleValidation()
    }

    const handleValidation = () => {
        setValidation({
            ...validation,
            password: passwordValidation(password.current),
        })
    }

    return (
        <div className={styles.login}>
            {isLoginSuccess === false && (
                <Alert
                    title="Unable to login"
                    message="Please provide valid credentials"
                    alertType="danger"
                    close={() => setIsLoginSuccess(undefined)}
                />
            )}
            <form onSubmit={(event) => handleLogin(event)}>
                <Input
                    onChange={(event) => handleUsername(event)}
                    label="Username"
                    type="text"
                />
                <Input
                    onChange={(event) => handlePassword(event)}
                    label="Password"
                    type="password"
                    validation={validation.password}
                />
                <Button className={styles.button} type="submit" label="Login" />
            </form>
        </div>
    )
}
