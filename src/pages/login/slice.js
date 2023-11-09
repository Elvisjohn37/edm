import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: { isLogin: true },
    },
    reducers: {
        setlogin: (state, action) => {
            action.payload.userInfo.password &&
                delete action.payload.userInfo.password
            state.login = action.payload
        },
    },
})

export const { setlogin } = loginSlice.actions

export default loginSlice.reducer
