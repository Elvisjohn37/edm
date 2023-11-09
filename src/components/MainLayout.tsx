import MainNavigation from './MainNavigation'
import MainFooter from './MainFooter'
import styles from './MainLayout.module.scss'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div className={styles.mainLayout}>
            <MainNavigation />
            <div className={styles.mainContent}>
                <Outlet />
            </div>
            <MainFooter />
        </div>
    )
}
