type TModal = {
    isShow: boolean;
    close: () => void
}

type TPassword = {
    isValid?: boolean;
    message?: string;
}

type TValidation = {
    password?: TPassword
}

export type { TModal, TValidation }
