import React from 'react'
import styles from './MainNavigation.module.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../pages/login/slice'

export default function MainNavigation() {
    const dispatch = useDispatch()
    const login: any = useSelector((state: any) => state.login)

    const handleLogout = () => {
        dispatch(logout())
    }
    
    return (
        <div className={styles.mainNavigation}>
            <div className={styles.brand}></div>
            <div className={styles.menu}>
                <ul>
                    {login.login.isLogin && (
                        <li>
                            <NavLink onClick={handleLogout} to="/">
                                Logout
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
