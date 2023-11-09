/* eslint-disable react-hooks/exhaustive-deps */
import styles from './Alert.module.scss'
import classNames from 'classnames'
import { TAlert, TAlertTypes } from './alert/alert'
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Alert({ title, message, alertType, close }: TAlert) {
    const alertTypes: TAlertTypes<IconDefinition> = {
        danger: faCircleExclamation,
    }

    const [isShow, setIsShow] = useState(true)

    const handleClose = () => {
        setIsShow(false)
        close()
    }

    let timeout: string | number | NodeJS.Timeout | undefined

    useEffect(() => {
        if (!timeout) {
            timeout = setTimeout(() => handleClose(), 5000)
        }
        return () => clearTimeout(timeout)
    }, [timeout])

    const handleMouseEnter = () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            handleClose()
        }, 20000)
    }

    const handleMouseLeave = () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            handleClose()
        }, 5000)
    }

    return isShow ? (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={classNames([styles.alert, styles[alertType]])}
        >
            <div className={styles.type}>
                <FontAwesomeIcon icon={alertTypes[alertType]} />
            </div>
            <div className={styles.text}>
                <div className={styles.title}>sample title</div>
                <div className={styles.message}>sample message</div>
            </div>
            <div className={styles.close} onClick={handleClose}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
    ) : null
}
