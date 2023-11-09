type TAppRoute = {
    login: TLogin;
}

type TUser = {
    login: TLogin;
}

type TLogin = {
    isLogin: boolean;
}

export type { TAppRoute, TLogin, TUser }