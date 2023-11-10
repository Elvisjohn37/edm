type TInput = {
    type?: string
    label: string
    validation?: TPassword
    placeholder?: string
    className?: string;
    onChange?: (event: any) => void | undefined
}

type TPassword = {
    isValid?: boolean
    message?: string
}

type TButton = {
    type?: 'button' | 'submit' | 'reset'
    label: string
    onClick?: () => void
    className?: string
    disabled?: boolean;
}

export type { TInput, TButton }
