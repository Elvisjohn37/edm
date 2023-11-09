type TUser = {
    id: number
    name: string
    todo: string
    date: string
    role: TRole
    newValue?: string
}

type TRole = {
    id: number
    role: string
}

export type { TUser }
