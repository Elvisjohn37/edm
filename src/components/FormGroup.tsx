import styles from './FormGroup.module.scss'
import { TInput, TButton } from './formgroup/FormGroup'
import classnames from 'classnames'

const Input = ({
    type = 'text',
    placeholder,
    label,
    onChange,
    validation,
}: TInput) => {
    return (
        <div className={styles.input}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} onChange={onChange} />
            {!validation?.isValid && (
                <span className={styles.errorMessage}>
                    {validation?.message}
                </span>
            )}
        </div>
    )
}

const Button = ({ type = 'button', label, className, onClick, disabled }: TButton) => {
    return (
        <button
            className={classnames([styles.button, className])}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export { Input, Button }
