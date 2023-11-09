import React from 'react'
import styles from './MainNavigation.module.scss'
import { NavLink } from 'react-router-dom'

export default () => (
    <div className={styles.mainNavigation}>
        <div className={styles.brand}>Hello</div>
        <div className={styles.menu}>
            <ul>
                <li><NavLink to="/">Logout</NavLink></li>
            </ul>
        </div>
    </div>
)
