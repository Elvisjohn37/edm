type TData = {
    id: number;
    name: string;
    username: string;
    password: string;
}

type TResponse = {
    data: TData[]
}

type TPassword = {
    isValid?: boolean;
    message?: string;
}

type TValidation = {
    password?: TPassword
}

export type { TData, TResponse, TValidation }
