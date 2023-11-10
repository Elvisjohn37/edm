import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: { isLogin: false },
    },
    reducers: {
        setlogin: (state, action) => {
            action.payload.userInfo.password &&
                delete action.payload.userInfo.password
            state.login = action.payload
        },
        logout: (state) => {
            state.login = { isLogin: false}
        }
    },
})

export const { setlogin, logout } = loginSlice.actions

export default loginSlice.reducer
